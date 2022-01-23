import React from 'react';
import ContextApi from './components/contextApi/ContextApi';
import UseCallbackApi from './components/useCallbackApi/UseCallbackApi';
import './App.css';

function App(props) {
  return (
    <>
      <ContextApi />
      <UseCallbackApi />
    </>
  );
}

export default App;
