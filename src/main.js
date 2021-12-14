const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a42059d3188e1f005851b987352cd9954c2dd8e725bf9bca60628a90fd0c3a3c');
const myWalletAddress = myKey.getPublic('hex');


let demoCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
demoCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
demoCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of demo is', demoCoin.getBalanceOfAddress(myWalletAddress));

// demoCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', demoCoin.isChainValid());
