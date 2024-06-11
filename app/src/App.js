import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import SideBar from './components/Sidebar';
import IfComponent from './components/IfComponent';

function App() {
  return (
    <div className="App">
      <SideBar />
      <IfComponent />
    </div>
  );
}

export default App;
