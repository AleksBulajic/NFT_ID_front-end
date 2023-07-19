import React, { useContext} from 'react'
import ThemeContext from './ThemeContext';
import './settings.css';


const QandA= () => {
  const { themeColor } = useContext(ThemeContext);

  return (
    <div className = "qa-container" style={{ backgroundColor: themeColor }}>
        <h1 className = "title"></h1>
    <div className = "page-container">
      <div className="QandA">
        <h1 className = "page-title">Q&A</h1>
        <p className="questions">Question : How can I link my Metamask wallet to IdentityLock? </p>
        <p className="answers">Answer : To link your Metamask wallet to IdentityLock, simply click on the "Connect Wallet" button on the IdentityLock homepage. A popup will appear, and you can select "Metamask" from the list of options. You'll then be prompted to sign a message to confirm the connection. Once done, your Metamask wallet will be successfully linked to IdentityLock.</p>
        <p className="questions">Question :  What is a web3 DID and how does IdentityLock use it to secure my information? </p>
        <p className="answers">Answer : A web3 DID (Decentralized Identifier) is a type of identifier that allows you to manage your identity and verifiable claims without relying on a centralized authority. IdentityLock uses web3 DID to ensure your information is only accessible by you. Every time you perform an action, your identity is verified through your unique web3 DID, ensuring maximum security and privacy.</p>
        <p className="questions">Question : How does IdentityLock help me create an NFT?</p>
        <p className="answers">Answer : IdentityLock simplifies the process of creating an NFT. You simply need to upload your digital asset and fill out the details regarding your NFT, such as name, description, and properties. Then, you can click on the "Mint NFT" button. IdentityLock will then initiate a Metamask transaction, where you will need to confirm the gas fee and transaction details. Once confirmed, your NFT will be created and connected to your web3 DID.</p>
        <p className="questions">Question : What measures does IdentityLock take to ensure that my NFTs are secured?</p>
        <p className="answers">Answer : IdentityLock uses cutting-edge blockchain technology and web3 DIDs to ensure the security of your NFTs. When an NFT is minted, it's associated with your unique web3 DID, ensuring that no one else can access or manage it unless they have your private keys. The NFTs are stored on the blockchain, making them tamper-resistant and immutable.</p>
        <p className="questions">Question : How do I view my NFT in IdentityLock?</p>
        <p className="answers">Answer : Once you create an Identity your NFT will be displayed on your personal Home Page. You can update this Identity whenever you want inside our settings link.</p>
      </div>
      
    </div>
    </div> 
  )
}

export default QandA;
