import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloClass from './components/HelloClass';
import HelloFunction from './components/HelloFunction';
import CounterClass from './components/CounterClass';

function App() {
  const [isShowClass, setIsShowClass] = useState(true);

  const removeClassComponent = () => {
    setIsShowClass(false);
  }

  return (
    <div className="App">
      <div style={ {float: 'left'} }>
        <h1>Function components</h1>
        <HelloFunction message={"hello from parent function component"}  />
      </div>
      <div style={ {float: 'right'} }>
        <h1>class components</h1>
        <HelloClass psh="hello from parent class" />
        {
          isShowClass && (
            <CounterClass number={5} cb={removeClassComponent} />
          )
        }
        
      </div>
    </div>
  );
}

export default App;
