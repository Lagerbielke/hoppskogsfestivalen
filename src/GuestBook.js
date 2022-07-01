import logo from './logo.svg';
import './App.css';
import React from 'react'

function GuestBook() {
  const [messages, setMessages] = React.useState([])
  const [currentMessageContent, setCurrentMessageContent] = React.useState('')
  const [currentAuthor, setCurrentAuthor] = React.useState('')

  const sendMessage = () => {
    const newMessage = {
      content: currentMessageContent,
      author: currentAuthor
    }
    
    var newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setCurrentMessageContent('')
    setCurrentAuthor('')
  }

  return (
    <div>
      <div>
        <input type="textarea"
          value={currentMessageContent}
          onChange={(e) => setCurrentMessageContent(e.target.value)}
        />
        <input type="text"
          value={currentAuthor}
          onChange={(e) => setCurrentAuthor(e.target.value)}
        />
      <button onClick={sendMessage}>Skicka</button>
      </div>
      <div>
        {messages.map((m) => (
          <div key={m.content + m.author}>
            <p>Av {m.author}: {m.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestBook;
