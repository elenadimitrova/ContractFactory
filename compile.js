'use strict';

const _ = require('lodash');
const solc = require('solc');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const _COMPILED_CONTRACTS_DIR_ = './compiled-contracts/';
const _CONTRACTS_DIR_ = './contracts/';
const files = fs.readdirSync(_CONTRACTS_DIR_);

var contracts = {};
_.reduce(files, function(memo, filename){
  memo[filename] = fs.readFileSync(path.join(_CONTRACTS_DIR_, filename), 'ascii');
  return memo;
}, contracts);

console.log(chalk.bold.green('Compiling contracts...'));
var result = solc.compile({sources: contracts}, 1);
if(result.errors)
{
  _.each(result.errors, function(error){
    console.error(error);
  });
  process.exit(1);
}

var compiledContractsKeys = _.keys(result.contracts);
_.map(compiledContractsKeys, function(compiledContractName){

  console.log(`Compiled ${compiledContractName}`);
  let filepath = path.join(_COMPILED_CONTRACTS_DIR_, `${compiledContractName}.sol.js`);
  if(fs.existsSync(filepath)){
    fs.unlinkSync(filepath);
  }

  let contractCode = result.contracts[compiledContractName];
  fs.writeFileSync(filepath, JSON.stringify({
    abi: contractCode.interface,
    binary: contractCode.bytecode
  }), 'ascii');
});
