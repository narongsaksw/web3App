// https://eth-rinkeby.alchemyapi.io/v2/sBXyZcI2GL9_tJMafxDyBB9gundtW3c0

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/sBXyZcI2GL9_tJMafxDyBB9gundtW3c0',
      accounts: ['b5560d892a65d7c19494e34b26176b3d58a7394afff044c68e3279f60cab89c5']
    }
  }
}