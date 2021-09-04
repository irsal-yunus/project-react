import React from 'react'
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import SignOutContainer from './containers'


function App() {
  return (
    <BrowserRouter>
      <SignOutContainer />
    </BrowserRouter>
  );
}

export default App;
