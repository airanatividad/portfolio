import React, { useState } from 'react';
import './project.css';
import placeholderImage from './react.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

function Projects() {
  const [expanded, setExpanded] = useState(new Set());  // State to keep track of expanded item
  const [allExpanded, setAllExpanded] = useState(false); // Tracks expansion of all items

  const tracks = [
    { number: 1, title: "PICSEL: Room Reservation System", role: "Backend Developer", stack: "PERN", date: "May 2024", github: "https://github.com/airanatividad/portfolio", website: "https://picsel-e4l.vercel.app/", image: placeholderImage, description: "Collaborated with my entire section to develop a room reservation system designed to optimize booking processes, utilizing PERN stack." },
    { number: 2, title: "LOLCode Interpreter", role: "Developer", stack: "Python", date: "Jan 2024", github: "https://github.com/example2", website: null, image: placeholderImage, description: "An interpreter for the LOLCode Programming Language built with Python and Tkinter." },
    { number: 3, title: "Unbeatable TicTacToe Game", role: "Developer", stack: "Python", date: "Dec 2023", github: null, website: "https://example3.com", image: placeholderImage, description: "An unbeatable AI agent for TicTacToe that utilizes the MinMax algorithm with Alpha-Beta pruning, implemented in Python and Tkinter." },
    { number: 4, title: "P2P: A Lending Tracker App", role: "Full Stack Developer", stack: "PHP, MariaDB, jQuery", date: "June 2023", github: null, website: "https://example3.com", image: placeholderImage, description: "An information system that allows to record, data of owed money from friend or group expenses built with PHP, Bootstrap, jQuery, and MariaDB." },
    { number: 5, title: "Clearance Application System", role: "Database/Backend Developer", stack: "MERN", date: "June 2023", github: null, website: "https://example3.com", image: placeholderImage, description: "A comprehensive clearance approval system built using MERN stack." },
    { number: 6, title: "COVID-19 Health Monitoring Mobile App", role: "Full Stack Developer", stack: "Flutter, Firebase", date: "June 2023", github: null, website: "https://example3.com", image: placeholderImage, description: "A Flutter-Firebase Mobile application designed to track and monitor the health status of users in relation to COVID-19." }
  ];

// Toggle individual track expansion
const toggleExpansion = (index) => {
  const newExpanded = new Set(expanded);
  if (newExpanded.has(index)) {
    newExpanded.delete(index);
  } else {
    newExpanded.add(index);
  }
  setExpanded(newExpanded);
};

// Expand/collapse all tracks
const expandAllTracks = () => {
  if (expanded.size === tracks.length) {
    setExpanded(new Set()); // Collapse all if all are expanded
  } else {
    setExpanded(new Set(tracks.map((_, index) => index))); // Expand all
  }
};



return (
  <div className="right-column">
    <div className="playlist-container">
      <div className="projects-title-card">
        <img src={placeholderImage} alt="Project Icon" className="title-icon" />
        <div className='project-text'>
          <div className="project-title">Projects</div>
          <div className="project-details">
            <a href="https://github.com/airanatividad" target="_blank" rel="noopener noreferrer">airanatividad</a>
            <span> • {tracks.length} projects</span>
          </div>
        </div>
      </div>
      <button onClick={expandAllTracks} className="play-button">
        <i className="fas fa-play"></i>
      </button>
      <div className="playlist-header">
        <div className="track-number">#</div>
        <div className="track-info">Project</div>
        <div className="track-album">Tech Stack</div>
        <div className="track-added">Date</div>
        <div className="track-duration">Links</div>
      </div>
      <div className="playlist-items">
        {tracks.map((track, index) => (
          <div key={index} className={`playlist-item ${expanded.has(index) ? "expanded" : ""}`} onClick={() => toggleExpansion(index)}>
            <div className="track-details">
              <div className="track-number">{track.number}</div>
              <div className="track-info">
                <img src={track.image} alt="Album Art" className="track-image" />
                <div>
                  <div className="track-title">{track.title}</div>
                  <div className="track-artist">{track.role}</div>
                </div>
              </div>
              <div className="track-album">{track.stack}</div>
              <div className="track-added">{track.date}</div>
              <div className="track-duration">
                {track.github && <a href={track.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>}
                {track.website && <a href={track.website} target="_blank" rel="noopener noreferrer"><i className="fas fa-link"></i></a>}
              </div>
            </div>
            {expanded.has(index) && (
              <div className="track-description">{track.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
}


export default Projects;
