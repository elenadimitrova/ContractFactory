'use strict';

const deployConfig = require('./deploy.json');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const _COINBASE_ = web3.eth.coinbase;
const _ACCOUNTS_ = web3.eth.accounts;
const _COMPILED_CONTRACTS_DIR_ = './compiled-contracts/';
const files = fs.readdirSync(_COMPILED_CONTRACTS_DIR_);

var compiledContracts = {};
_.reduce(files, function(memo, filename){
  memo[filename.replace('.sol.js', '')] = JSON.parse(fs.readFileSync(path.join(_COMPILED_CONTRACTS_DIR_, filename), 'ascii'));
  return memo;
}, compiledContracts);

_.each(deployConfig.deploy, function(contractName){
  let compiledContract = compiledContracts[contractName];
  let contract = web3.eth.contract(JSON.parse(compiledContract.abi));
  let contractInstance = contract.new({
    from: _ACCOUNTS_[0],
    gas: 4e6,
    data: compiledContract.binary
  }, function(error, args){

    console.log(chalk.bold.blue(contractName));

    if(error || !args) {
      console.log(chalk.bold.red(error));
      return;
    }

    if(!args.address)
    {
      console.log('Contract transaction sent: TX ID: ', args.transactionHash, ' waiting to be mined...');
    }
    else
    {
      console.log(chalk.green(`Contract mined! Address: ${args.address}`));
    }
  });
});
