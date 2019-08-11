import React, { useState, useEffect } from 'react';

import ContadorTempo from './ContadorTempo';
import ContadorVoltas from './ContadorVoltas';
import Button from './Button';

import './App.css';

function App () {
  const [ voltas, setVoltas ] = useState(0);
  const [ running, setRunning] = useState(false);
  const [ tempo, setTempo ] = useState(0);

  useEffect(() => {
    let timer = null;

    if(running)
      timer = setInterval(() => {
        setTempo(old => old + 1);
      }, 1000);

    return () => { 
      if(timer) clearInterval(timer);
    }
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  }

  const more = () => {
    setVoltas(voltas + 1);
  }

  const less = () => {
    if(voltas > 0)
      setVoltas(voltas - 1);
  }

  const reset = () => {
    setVoltas(0);
    setTempo(0);
    setRunning(false);
  }

  return (
    <div className='App'>
      <ContadorVoltas voltas={ voltas } />
      <div>
        <Button text='+' className='large' onClick={ more } />
        <Button text='-' className='large' onClick={ less } />
      </div>
      {
        voltas > 0 &&
        <ContadorTempo secs={ tempo / voltas } />
      }
      <Button text={ running ? 'pausar' : 'iniciar'} onClick={ toggleRunning } />
      <Button text='reiniciar' onClick={ reset } />
    </div>
  );
}

export default App;
