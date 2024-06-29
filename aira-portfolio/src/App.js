import React from 'react';
import './index.css';
import Profile from './profile';

function App() {
  return (
    <div className="container">
      <div className="column left">
        <Profile />  {/* profile */}
      </div>
      <div className="column right">
        Right Column Content  {/* projects */}
      </div>
    </div>
  );
}

export default App;