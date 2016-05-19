<<<<<<< HEAD
# Issue on contract deployment
If I try to deploy these contracts using solc, web3 and geth, it says: `Error: The contract code couldn't be stored, please check your gas amount.`. Even using a gas amount close to the gas limit. Running on truffle, it says that the parent contract is deployed but fails when the tx is sent.

On this project, I'm using npm web3 and solc to compile and deploy the contracts. Just use `grunt deploy`to check.
=======
# Factory
Issue demo of contract creation where a suspected out-of-gas error occurs but it never throws resulting in a odd address of format [0x6464646464646464640000000000000000000000] which appears to be the post 8 chars of the organisation byte32 key with which we try to create it instead of an address as expected.

# How to reproduce that behavior?

This is a truffle project so you can just use `truffle test` to see tests results. Both tests fail, this problem has been reproduced using both `ethereumjs-testrpc` and `geth`.
>>>>>>> 72ff1d53dd60cbfda9eaf38a130f765e8b2ee510
