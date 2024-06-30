import React from 'react';
import './App.css';
import Profile from './profile';
import Projects from './project';

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