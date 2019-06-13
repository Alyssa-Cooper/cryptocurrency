const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const Blockchain = require('./blockchain');
const PubSub = require('./pubsub');
const Wallet = require('./wallet');

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });
const wallet = new Wallet();

app.use(bodyParser.json());

// Reads the blockchain
app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

// Gets chain length
app.get('/api/blocks/length', (req, res) => {
    res.json(blockchain.chain.length);
});

// Gets the wallet info
app.get('/api/wallet-info', (req, res) => {
  // Write your code here

  res.status(400).json({ type: 'error', message: 'Not implemented' });
});

// Gets known wallet addresses based on the transactions on the chain
app.get('/api/known-addresses', (req, res) => {
  // Write your code here

  res.status(400).json({ type: 'error', message: 'Not implemented' });
});

// Mines a transaction given the data is in the request body
app.post('/api/mine-transaction', (req, res) => {
  // Write your code here

  res.status(400).json({ type: 'error', message: 'Not implemented' });
});

// Starts peers through alternate ports
const DEFAULT_PORT = 8000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;
let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.log(`listening at localhost:${PORT}`);

  if (PORT !== DEFAULT_PORT) {
    syncWithRootState();
  }
});

// Synchronizes chains when new peers connected to the network.
const syncWithRootState = () => {
    request({ url: `${ROOT_NODE_ADDRESS}/api/blocks` }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const rootChain = JSON.parse(body);
  
        console.log('replace chain on a sync with', rootChain);
        blockchain.replaceChain(rootChain);
      }
    });
}  