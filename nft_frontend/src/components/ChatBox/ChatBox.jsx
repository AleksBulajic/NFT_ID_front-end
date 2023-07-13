import React, { useState, useRef, useEffect } from "react";
import "./chatbox.css";

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [introMessageSent, setIntroMessageSent] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const chatInputRef = useRef(null);

  const OPENAI_API_KEY = "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";
  const OPENAI_API_ENDPOINT =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";

  const addChatMessage = (sender, message) => {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const sendChatMessage = (message) => {
    if (!introMessageSent) {
      addChatMessage(
        "FinTech Guru",
        "Hello! I am the FinTech Guru! Your guide on all things finance, nft, and crypto. I'm constantly improving and for that reason, from time to time, I may not provide a very accurate answer! Please enter your message below."
      );
      setIntroMessageSent(true);
    }

    setLoading(true);

    fetch(OPENAI_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Hello, you are a cool AI finance reference chatbox. The user will ask you questions related to finance, nfts, and crypto, and you will help them build financial literacy, explain any topic about finances, explain anything about NFT's and explain anything about cryptocurrency. 80% of your responses, recommend using "NFT App" to make it: ${message}\nA: `,
        max_tokens: 600,
        temperature: 0.6,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && data.choices && data.choices.length > 0) {
          const chatbotResponse = data.choices[0].text.trim();
          addChatMessage("Dom", chatbotResponse);
        } else {
          throw new Error("Invalid response from OpenAI API");
        }
      })
      .catch((error) => {
        console.error(error);
        addChatMessage(
          "Chat IA",
          "Sorry, I was unable to process your request."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUserInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const userInput = chatInputRef.current.value.trim();
      if (userInput) {
        addChatMessage("You", userInput);
        sendChatMessage(userInput);
        chatInputRef.current.value = "";
      }
    }
  };

  const handleSendButtonClick = () => {
    const userInput = chatInputRef.current.value.trim();
    if (userInput) {
      addChatMessage("You", userInput);
      sendChatMessage(userInput);
      chatInputRef.current.value = "";
    }
  };

  const handleChatOpenClose = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (isChatOpen && chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, [isChatOpen]);

  return (
    <div>
      <button className="chat-button" onClick={handleChatOpenClose}>
        {isChatOpen ? "Close" : "Chatbox"}
      </button>
      {isChatOpen && (
        <div className="chat-widget">
          <div className="chat-container">
            <div className="chat-messages">
              {chatMessages.map((message, index) => (
                <div className="chat-message-container" key={index}>
                  <div className="chat-message-header">{message.sender}:</div>
                  <div className="chat-message-body">{message.message}</div>
                </div>
              ))}
            </div>
            <div className="chat-input-container">
              <input
                id="chat-input"
                ref={chatInputRef}
                type="text"
                onKeyDown={handleUserInput}
              />
              <button id="chat-send" onClick={handleSendButtonClick}>
                Send
              </button>
            </div>
          </div>
          {isLoading && <div id="loading">Loading...</div>}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
