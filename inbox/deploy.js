const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const INIT_MESSAGE = "";

const provider = new HDWalletProvider(
    //account mnemonincs
    '', 
    //Infura API address
    ''
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INIT_MESSAGE] })
        .send({ gas: '1000000', from: accounts[0] });
    
};
deploy();