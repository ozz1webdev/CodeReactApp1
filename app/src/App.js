import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import SideBar from './components/Sidebar';
import IfComponent from './components/IfComponent';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
