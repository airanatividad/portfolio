import React, { useState } from 'react';
import '../css/project.css';
import '@fortawesome/fontawesome-free/css/all.css';
import picsel from '../images/picsel.png';
import lolcode from '../images/lolcode.png';
import tictactoe from '../images/tictactoe.png';
import p2p from '../images/p2p.png';
import cas from '../images/cas.png';
import flutter from '../images/flutter.png';
import projects from '../images/projects.png';

function Projects() {
  const [expanded, setExpanded] = useState(new Set());  // State to keep track of expanded item

  const tracks = [
    { number: 1, title: "PICSEL: Room Reservation System", role: "Backend Developer", stack: "PERN", date: "May 2024", github: "https://github.com/airanatividad/portfolio", website: "https://picsel-e4l.vercel.app/", image: picsel, description: "Collaborated with my entire section to develop a room reservation system designed to optimize booking processes, utilizing PERN stack." },
    { number: 2, title: "LOLCode Interpreter", role: "Developer", stack: "Python, Tkinter", date: "Jan 2024", github: null, website: "https://drive.google.com/file/d/1eFbFnqUa_oOkxeTABy6yx84n5H_KpOvR/view?usp=sharing", image: lolcode, description: "An interpreter for the LOLCode Programming Language built with Python and Tkinter." },
    { number: 3, title: "Unbeatable TicTacToe Game", role: "Developer", stack: "Python, Tkinter", date: "Dec 2023", github: null, website: "https://drive.google.com/file/d/1Zhy_6P_FRL8AtbpLpzqaeb1uqf5EUbxj/view?usp=sharing", image: tictactoe, description: "An unbeatable AI agent for TicTacToe that utilizes the MinMax algorithm with Alpha-Beta pruning, implemented in Python and Tkinter." },
    { number: 4, title: "P2P: A Lending Tracker App", role: "Full Stack Developer", stack: "PHP, MariaDB, jQuery", date: "June 2023", github: "https://github.com/Danke86/P2P-Loan-Tracker", website: null, image: p2p, description: "An information system that allows to record, data of owed money from friend or group expenses built with PHP, Bootstrap, jQuery, and MariaDB." },
    { number: 5, title: "Clearance Application System", role: "Backend Developer", stack: "MERN", date: "June 2023", github: "https://github.com/airanatividad/clearance-application-site", website: null, image: cas, description: "A comprehensive clearance approval system built using MERN stack." },
    { number: 6, title: "COVID-19 Health Monitoring Mobile App", role: "Full Stack Developer", stack: "Flutter, Firebase", date: "June 2023", github: "https://github.com/CMSC-23-2nd-Sem-2022-2023/project-atienza_iloso_natividad_taag", website: null, image: flutter, description: "A Flutter-Firebase Mobile application designed to track and monitor the health status of users in relation to COVID-19." }
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
        <img src={projects} alt="Project Icon" className="title-icon" />
        <div className='project-text'>
          <div className="project-title">Projects</div>
          <div className="project-details">
            <a href="https://github.com/airanatividad" target="_blank" rel="noopener noreferrer">airanatividad</a>
            <span> • {tracks.length} projects</span>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={expandAllTracks} className="play-button">
          <i className="fas fa-play"></i>
        </button>
        <a href="https://raw.githubusercontent.com/airanatividad/portfolio/main/public/NatividadAira_Resume.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
            <i className="fas fa-arrow-circle-down"></i>
        </a>
      </div>
      <div className="playlist-header">
        <div className="track-number">#</div>
        <div className="track-info-head">Project</div>
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