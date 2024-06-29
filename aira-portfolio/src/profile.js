import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-header">
            <img src="" alt="Profile" className="profile-image"/>
            <div className="profile-info">
            <h1>Aira Natividad</h1>
            <p>anatividad@up.edu.ph</p>
            </div>
        </div>
        
        <div className="profile-section">
            <h2>Skills and Interests</h2>
        </div>
        
        <div className="profile-section">
            <h2>Education</h2>
        </div>
        
        <div className="profile-section">
            <h2>Co-curricular Activities</h2>
        </div>
    </div>
  );
}

export default Profile;
