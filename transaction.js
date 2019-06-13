const uuid = require('uuid/v1');

class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.id = uuid();
    this.outputs = this.createOutputs({ senderWallet, recipient, amount });
    this.input = this.createInput({ senderWallet });
  }

  /**
   * Creates transaction outputs
   * 
   * @param { senderWallet, recipient, amount } dictionary of senderWallet, recipient address, and the amount to send
   * 
   * @returns dictionary of outputs where each output key is recipient address and value is the amount to send
   */
  createOutputs({ senderWallet, recipient, amount }) {
    // Write your code here

    return {};
  }

  /**
   * Creates transaction input
   * 
   * @param { senderWallet } dictionary that includes senderWallet
   */
  createInput({ senderWallet }) {
    // Write your code here
    return {};
  }
}

module.exports = Transaction;