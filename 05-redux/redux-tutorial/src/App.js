import React from 'react';
import './App.css';
import SendMessage from './components/SendMessage';
import GetMessage from './components/GetMessage';

function App() {
  // const [message, setMessage] = useState('');

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">

          <div className="col-6">
            <SendMessage />
          </div>

          <div className="col-6">
            <GetMessage />
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
