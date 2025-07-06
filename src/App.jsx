import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import './App.css';
import ChatLog from './components/ChatLog';

const App = () => {
  const firstMessage = messages[0];

  return (
    <div id="App">
      <header>
        <h1>Camille's Chatroom</h1>
      </header>
      <main>
        <ChatLog messages={messages} />
      </main>
    </div>
  );
};

export default App;
