// import { Account, NetworkType } from 'tsjs-xpx-chain-sdk';

const { Account, NetworkType } = require('tsjs-xpx-chain-sdk');
// const Account = xpx;
// const NetworkType = xpx;

const generateXpxAcc = () => {
  const account = Account.generateNewAccount(NetworkType.TEST_NET);
  console.log('PK', account.privateKey);

  return { privateKey: account.privateKey, address: account.address };
};

// export { generateXpxAcc };

exports.generateXpxAcc = generateXpxAcc;
