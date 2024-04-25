import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAuctionItem from "./components/CreateAuctionItem";
import Navigation from "./components/Navigation";
import SecretToken from "./components/SecretToken";
import BidOnAuctionItem from "./components/BidOnAuctionItem";
import { projectId, testnets, mainnets, metadata } from "./config/config";
import MyImage from "./poweredby.png";
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

createWeb3Modal({
  ethersConfig,
  chains: [
    testnets.arbitrumTestnet,
    testnets.sepoliaTestnet,
    testnets.scrollTestnet,
    testnets.polygonTestnet,
    testnets.optimismTestnet,
    testnets.baseSepoliaTestnet,
    testnets.berachainTestnet,
    testnets.metisSepoliaTestnet,
    testnets.lineaSepoliaTestnet,
    testnets.nearAuroraTestnet,
    mainnets.ethereumMainnet,
    mainnets.polygonMainnet,
    mainnets.binanceSmartChainMainnet,
    mainnets.optimismMainnet,
    mainnets.arbitrumMainnet,
    mainnets.avalancheMainnet,
    mainnets.baseMainnet,
    mainnets.scrollMainnet,
    mainnets.lineaMainnet,
  ],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  return (
    <div className="mt-4">
      <w3m-button />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-white text-xl font-bold mb-10 ml-16">
            EVM Sealed-bid Auctions
          </div>
          <Router>
            <Navigation />

            <Routes>
              <Route path="/create" element={<CreateAuctionItem />} />
              <Route path="/bid" element={<BidOnAuctionItem />} />
            </Routes>
          </Router>
          <img
            src={MyImage}
            alt="Descriptive Text"
            className=" w-18 h-12 rounded-lg shadow-lg mt-8 ml-36"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
