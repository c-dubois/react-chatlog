import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import './App.css';

const App = () => {
  const firstMessage = messages[0];

  return (
    <div id="App">
      <header>
        <h1>Camille's Chatroom</h1>
      </header>
      <main>
        <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
