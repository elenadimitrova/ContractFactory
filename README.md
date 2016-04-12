# Factory
Issue demo of contract creation where a suspected out-of-gas error occurs but it never throws resulting in a odd address of format [0x6464646464646464640000000000000000000000] which appears to be the post 8 chars of the organisation byte32 key with which we try to create it instead of an address as expected.

# How to reproduce that behavior?

This is a truffle project so you can just use `truffle test` to see tests results. Both tests fail, this problem has been reproduced using both `ethereumjs-testrpc` and `geth`.
