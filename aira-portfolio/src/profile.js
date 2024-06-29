import React, { useState } from 'react';
import './profile.css';
import placeholderImage from './react.jpg'; // Import the image
import profilePic from './Natividad.jpg';

function Profile() {
    const [showAll, setShowAll] = useState(false); // State to toggle showing all skills
    const skills = [
        { name: "JavaScript", img: placeholderImage },
        { name: "C", img: placeholderImage },
        { name: "Python", img: placeholderImage },
        { name: "Java", img: placeholderImage },
        { name: "PHP", img: placeholderImage },
        { name: "R", img: placeholderImage }
    ];

    const education = [
        { name: "Cainta Elementary School", img: placeholderImage },
        { name: "Cainta Catholic College", img: placeholderImage },
        { name: "University of the Philippines Los Banos", img: placeholderImage }
      ];

      const coCurricular = {
        name: "UPLB Computer Science Society",
        img: placeholderImage
      };

  return (
    <div className="profile-container">
        <div className="profile-header">
            <img src={profilePic} alt="Profile" className="profile-image"/>
            <div className="profile-info">
            <h1>Aira Natividad</h1>
            <p>annatividad@up.edu.ph</p>
            </div>
        </div>
        
        <div className="profile-section">
            <div className="skills-header">
                <h2>Skills and Interests</h2>
                <span onClick={() => setShowAll(!showAll)} className="show-all-text">
                {showAll ? "Show Less" : "Show All"}
                </span>
            </div>
            <div className="skills-container">
                {skills.slice(0, showAll ? skills.length : 3).map((skill, index) => (
                <div key={index} className="skill">
                    <img src={skill.img} alt={skill.name} className="skill-image"/>
                    <div className="skill-name">{skill.name}</div>
                </div>
                ))}
            </div>
        </div>
        
        <div className="profile-section">
            <div className="skills-header">
                <h2>Education</h2>
            </div>
            <div className="education-container">
                {education.map((school, index) => (
                <div key={index} className="education">
                    <img src={school.img} alt={school.name} className="education-image"/>
                    <div className="education-name">{school.name}</div>
                </div>
                ))}
            </div>
        </div>
        
        <div className="profile-section">
            <div className="skills-header">
                <h2>Co-curricular Activities</h2>
            </div>
            <div className="co-curricular-container">
                <div className="co-curricular">
                <img src={coCurricular.img} alt={coCurricular.name} className="co-curricular-image"/>
                <div className="co-curricular-name">{coCurricular.name}</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
