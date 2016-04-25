# Issue on contract deployment
If I try to deploy these contracts using solc, web3 and geth, it says: `Error: The contract code couldn't be stored, please check your gas amount.`. Even using a gas amount close to the gas limit. Running on truffle, it says that the parent contract is deployed but fails when the tx is sent.

On this project, I'm using npm web3 and solc to compile and deploy the contracts. Just use `grunt deploy`to check.
