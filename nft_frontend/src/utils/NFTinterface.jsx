// import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";
import contractABI from "../utils/ABInft";
import connectToContract from "../utils/contratcConnection";

// Optional config object, but defaults to the API key 'demo' and Network 'eth-mainnet'.
// const alchemySettings = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   network: Network.ETH_SEPOLIA,
// };

// const alchemy = new Alchemy(alchemySettings);
const contractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS;
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

// NFT contract
export const contract = connectToContract(contractAddress, contractABI, signer);
const event = await contract.queryFilter('Transfer')
export const mintNFT = async (address, uri) => {
  const nft = await contract.safeMint(address, uri);
  return nft;
};
