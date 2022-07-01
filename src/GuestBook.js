import logo from './logo.svg';
import './App.css';
import React from 'react'

function GuestBook() {
  const [messages, setMessages] = React.useState([])
  const [currentMessage, setCurrentMessage] = React.useState([])

  const sendMessage = () => {
    var newMessages = [...messages, currentMessage]
    setMessages(newMessages)
    setCurrentMessage('')
  }

  return (
    <div>
      <div>
        <input type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Skicka</button>
      </div>
      <div>
        {messages.map((m) => (
          <div><p>{m}</p></div>
        ))}
      </div>
    </div>
  );
}

export default GuestBook;
