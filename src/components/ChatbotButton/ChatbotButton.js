import React from "react";
import "./ChatbotButton.css";

const ChatbotButton = () => {
  const handleClick = () => {
    alert("Chatbot button clicked!");
  };

  return (
    <button className="chatbot-button" onClick={handleClick}>
      Chat
    </button>
  );
};

export default ChatbotButton;