import React, { useState, useRef, useEffect } from 'react';
import '../css/profile.css';
import javascript from '../images/javascript.png';
import python from '../images/python.png';
import c from '../images/c.png';
import java from '../images/java.png';
import php from '../images/php.png';
import r from '../images/r.png';
import ces from '../images/ces.png';
import ccc from '../images/ccc.png';
import uplb from '../images/uplb.png';
import uplbcoss from '../images/coss.png';
import profilePic from '../images/Natividad.jpg';

function Profile() {
    const [showAll, setShowAll] = useState(false); // State to toggle showing all skills
    const [skillsHeight, setSkillsHeight] = useState('0px'); // State to control the height of the skills container
    const skillsRef = useRef(null); // Ref to measure the full height of the skills container

    useEffect(() => {
        if (skillsRef.current) {
            setSkillsHeight(`${skillsRef.current.scrollHeight}px`); // Set the height based on the full content size
        }
    }, []);

    const toggleSkills = () => {
        setShowAll(!showAll);
        setSkillsHeight(showAll ? '150px' : `${skillsRef.current.scrollHeight}px`); // Toggle between full height and reduced height
    };
    
    const techskills = [
        { name: "JavaScript", img: javascript },
        { name: "C", img: c },
        { name: "Python", img: python },
        { name: "Java", img: java },
        { name: "PHP", img: php },
        { name: "R", img: r }
    ];

    const education = [
        { name: "Cainta Elementary School", img: ces },
        { name: "Cainta Catholic College", img: ccc },
        { name: "University of the Philippines Los Banos", img: uplb }
      ];

      const coCurricular = {
        name: "UPLB Computer Science Society",
        img: uplbcoss
      };

  return (
    <div className="profile-container">
        <div className="profile-header">
            <img src={profilePic} alt="Profile" className="profile-image"/>
            <div className="profile-info">
                <h1>Aira Natividad</h1>
                <p>annatividad@up.edu.ph | 09604717131</p>
            </div>
        </div>

        <div className="profile-section">
            <div className="skills-header">
                <h2>About Me</h2>
            </div>
            <p>Hello! I'm Aira. I'm a Computer Science student with a passion for Full Stack development.  I love tackling programming challenges and am eager to collaborate on projects that enhance user experiences. Let's connect!</p>
        </div>
        
        <div className="profile-section">
        <div className="skills-header">
                <h2>Skills and Interests</h2>
                <span onClick={toggleSkills} className="show-all-text">
                    {showAll ? "Show Less" : "Show All"}
                </span>
            </div>
            <div className="skills-container" style={{ height: showAll ? skillsHeight : '150px', overflow: 'hidden', transition: 'height 0.5s ease' }} ref={skillsRef}>
                {techskills.map((skill, index) => (
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