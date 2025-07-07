import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  const [chatData, setChatData] = useState(messages);

  const toggleLike = (id) => {
    setChatData(chatData.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      }
      return message;
    }));
  };

  return (
    <div id="App">
      <header>
        <h1>Camille's Chatroom</h1>
        <section className="widget" id="heartWidget">
          {chatData.filter((entry) => entry.liked).length} ❤️s
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
