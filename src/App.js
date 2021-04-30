import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Component } from 'react';

import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import Portis from "@portis/web3";
import Authereum from "authereum";
import ethProvider from "eth-provider";
import { Bitski } from "bitski";
import DcentProvider from "dcent-provider";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
import MewConnect from "@myetherwallet/mewconnect-web-client";
import detectEthereumProvider from '@metamask/detect-provider';

class App extends Component{


render() {
  var web3;
  var accounts;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "69ad1e81e7d64a258b80f29e627407c2" // required
      }
    },

    fortmatic: {
      package: Fortmatic, // required
      options: {
        key: "FORTMATIC_KEY" // required
      }
    },

    torus: {
      package: Torus, // required
      options: {
        networkParams: {
          
        },
        config: {
          buildEnv: "test" // optional
        }
      }
    },

    portis: {
      package: Portis, // required
      options: {
        id: "PORTIS_ID" // required
      }
    },

    authereum: {
      package: Authereum // required
    },

    frame: {
      package: ethProvider // required
    },

    bitski: {
      package: Bitski, // required
      options: {
        clientId: "BITSKI_CLIENT_ID", // required
        callbackUrl: "BITSKI_CALLBACK_URL" // required
      }
    },

    dcentwallet: {
      package: DcentProvider, // required
      options: {
        rpcUrl: "INSERT_RPC_URL" // required
      }
    },

    burnerconnect: {
      package: BurnerConnectProvider, // required
      options: {
        defaultNetwork: "1"
      }
    },

      mewconnect: {
        package: MewConnect, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
      },

  };
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

//------------------- Wallet Conection Script----------------------
  const walletconnectButton = async () => {

    const provider = await web3Modal.connectTo("walletconnect");
  
    web3 = new Web3(provider);

    accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);

    //console.log(web3);

  };

  const send = async()=>{
	
    web3.eth.sendTransaction({
      from:accounts[0] ,
      to:accounts[0], 
      value: 1,
      });
    console.log("Send Success");
  }

  const fortmaticButton = async () => {

    const provider = await web3Modal.connectTo("fortmatic");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const torusButton = async () => {

    const provider = await web3Modal.connectTo("torus");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const portisButton = async () => {

    const provider = await web3Modal.connectTo("portis");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const authereumButton = async () => {

    const provider = await web3Modal.connectTo("authereum");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const frameButton = async () => {

    const provider = await web3Modal.connectTo("frame");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const bitskiButton = async () => {

    const provider = await web3Modal.connectTo("bitski");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const dcentwalletButton = async () => {

    const provider = await web3Modal.connectTo("dcentwallet");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const burnerConnectButton = async () => {

    const provider = await web3Modal.connectTo("burnerconnect");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const mewconnectButton = async () => {

    const provider = await web3Modal.connectTo("mewconnect");
  
    web3 = new Web3(provider);

    console.log(web3);

  };

  const metamaskButton = async () => {

    const provider = await detectEthereumProvider();
  
    web3 = new Web3(provider);
    accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);

  };


//-------------------END----- Wallet Conection Script----------------------


return (
    <div className="App">
      <header className="App-header">
        
      <button onClick={walletconnectButton}>WalletConnect</button>
      <button onClick={send}>Create transaction</button>
      
      <button onClick={fortmaticButton}>Fortmatic</button>
      <button onClick={torusButton}>Torus</button>
      <button onClick={portisButton}>Portis</button>
      <button onClick={authereumButton}>Authereum</button>
      <button onClick={frameButton}>Frame</button>
      <button onClick={bitskiButton}>Bitski</button>
      <button onClick={dcentwalletButton}>Dcent Wallet</button>
      <button onClick={burnerConnectButton}>BurnerConnect</button>
      <button onClick={mewconnectButton}>Mew Connect</button>
      <button onClick={metamaskButton}>MetaMask</button>
      </header>
    </div>
  );


  }

}

export default App;
