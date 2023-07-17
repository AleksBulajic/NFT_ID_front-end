import React from "react";
import { useEffect, useState } from "react";
import { contract, mintNFT } from "../../web3/interfaice/NFTinterface";

const NFT = () => {
  const [nft, setNFT] = useState("");
  const [address, setAddress] = useState("");
  const [uri, setUri] = useState("");

  async function mint() {
    const nft = await mintNFT(address, uri);
    setNFT(nft);
  }

  function handleAddress(event) {
    setAddress(event.target.value);
  }

  function handleUri(event) {
    setUri(event.target.value);
  }

  // Set address and uri from form field
  return (
    <>
      <div>NFT</div>
      <p>Recipient Address</p>
      <input type value={address} onChange={handleAddress} />
      <br />
      <p>Image URI</p>
      <input value={uri} onChange={handleUri} />
      <br />
      <button onClick={mint}>Mint NFT</button>
      <br />
      <p>NFT transaction hash: {nft.hash} </p>
    </>
  );
};


export default  NFT;