require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'guess gloom symptom spot warrior ridge remain method hope enrich success gaze'; 
let testAccounts = [
"0xd9d71e640b659a0fdcaac65b2cc628f6ea5638fb7b6563b6b5a84909c8201401",
"0x26d791c01b43bedc2d953ff8988a866221d504a7db72eb305c7c861e2200b53a",
"0x87d154d9f6589f928e45f49eadb3306bec5d8c93e1fca255f55e62d70529c08c",
"0x5477f991151e1de88f396163dcd40d4127e905e9819cda5514b59386cf492db7",
"0x180527cfce4000a96327c2887fc2e0699aa720e99a83b24e33f7eb04f6ddd23d",
"0x63807dcf1193aec4fd2ce1cf0b8acacf3de93510e7030005c8a2e7e6301ec8a4",
"0x561f69fa7bb98c686726cda55ec4a8b39035451dc64be9a41fd754e95ac2cadd",
"0x3f2e418026d38bbc3923b7540edd591a992c9065db1c942b6af027b9f2f31d4f",
"0x5d87cbfbd62a31e3a526013c39d4b869b3be43c86eca7899c1ae8d00d629b70a",
"0x2e1a137e3231ecb23c23b7a8fda0831e125e466d35184e202bf32c903c717bad"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

