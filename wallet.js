const Transaction = require('./transaction');
const { STARTING_BALANCE } = require('./config');
const uuid = require('uuid/v1');
const cryptoHash = require('./crypto-hash')

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;
    this.address = cryptoHash(uuid()).slice(0, 8);
  }

  /**
   * Creates a transaction
   * 
   * @param {recipient, amount, chain} dictionary of the recipient address, the amount to send, and the chain 
   * 
   * @returns a transaction
   */
  createTransaction({ recipient, amount, chain }) {
    // Write your code here

    return new Transaction({});
  }

  /**
   * Calculates balance based on the current chain status
   * 
   * @param { chain, address } dictionary of the current chain and the wallet address 
   * 
   * @returns the current balance
   */
  static calculateBalance({ chain, address }) {

    return 0;
  }
}

module.exports = Wallet;