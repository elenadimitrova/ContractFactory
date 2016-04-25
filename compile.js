'use strict';

const _ = require('lodash');
const solc = require('solc');
const path = require('path');
const fs = require('fs');

const _COMPILED_CONTRACTS_DIR_ = './compiled-contracts/';
const _CONTRACTS_DIR_ = './contracts/';
const files = fs.readdirSync(_CONTRACTS_DIR_);

var contracts = {};
_.reduce(files, function(memo, filename){
  memo[filename] = fs.readFileSync(path.join(_CONTRACTS_DIR_, filename), 'ascii');
  return memo;
}, contracts);

var compiledContracts = solc.compile({sources: contracts}, 1);
var compiledContractsKeys = _.keys(compiledContracts.contracts);

_.map(compiledContractsKeys, function(compiledContractName){

  let filepath = path.join(_COMPILED_CONTRACTS_DIR_, `${compiledContractName}.sol.js`);
  if(fs.existsSync(filepath)){
    fs.unlinkSync(filepath);
  }

  let contractCode = compiledContracts.contracts[compiledContractName];
  fs.writeFileSync(filepath, JSON.stringify({
    abi: contractCode.interface,
    binary: contractCode.bytecode
  }), 'ascii');
});
