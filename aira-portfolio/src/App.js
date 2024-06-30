import React from 'react';
import './App.css';
import Profile from './components/profile';
import Projects from './components/project';

function App() {
  return (
    <div className="container">
      <div className="column left">
        <Profile />  {/* profile */}
      </div>
      <div className="column right">
        <Projects />  {/* projects */}
      </div>
    </div>
  );
}

export default App;