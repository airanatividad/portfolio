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
    { number: 1, title: "PICSEL: Room Reservation System", role: "Backend Developer", stack: "PERN", date: "May 2024", github: "https://github.com/airanatividad/portfolio", website: "https://picsel-e4l.vercel.app/", image: picsel, description: "PICSEL: Room Reservation System is a comprehensive platform designed to simplify and streamline the process of reserving rooms at the Institute of Computer Science. This system allows faculty, student organizations, and guests to book rooms for various activities such as exams and events. With features like Google/UP mail authentication and user activity logs, PICSEL ensures a secure and traceable reservation process. Users can manage room schedules, create, update, and delete reservations, and view the status of their requests. Administrators have the ability to approve bookings, manage payments, and generate necessary reports and approval documents. This system replaces the traditional manual booking process, providing a more efficient, user-friendly way to manage room allocations and reservations." },
    { number: 2, title: "LOLCode Interpreter", role: "Developer", stack: "Python, Tkinter", date: "Jan 2024", github: null, website: "https://drive.google.com/file/d/1eFbFnqUa_oOkxeTABy6yx84n5H_KpOvR/view?usp=sharing", image: lolcode, description: "LOLCode Interpreter is a specialized software tool designed to analyze and execute programs written in the LOLCode programming language. This interpreter comprehensively processes each program line through lexical, syntactic, and semantic analysis phases. It supports various data types, including integers, floating-point numbers, strings, and booleans. The interpreter also handles control flow statements such as if-then, switch-case, and loops, along with functions that ensure proper scope and parameter passing. Additionally, it provides a user interface for code input and displays, real-time lexeme classification, variable tracking, and program output." },
    { number: 3, title: "Unbeatable TicTacToe Game", role: "Developer", stack: "Python, Tkinter", date: "Dec 2023", github: null, website: "https://drive.google.com/file/d/1Zhy_6P_FRL8AtbpLpzqaeb1uqf5EUbxj/view?usp=sharing", image: tictactoe, description: "Unbeatable TicTacToe Game is a fun and challenging app that allows players to challenge an advanced AI in the classic game of Tic-Tac-Toe. Utilizing the minimax algorithm, the AI is designed to either win or secure a draw, ensuring that it never loses. The game is set on a traditional 3x3 grid where two players alternate turns marking the spaces with Xs and Os. The goal is to align three consecutive marks either horizontally, vertically, or diagonally. The interface is user-friendly, providing seamless interaction and real-time updates of the game status. This application not only serves as a fun and competitive challenge but also demonstrates the practical application of artificial intelligence in game strategy." },
    { number: 4, title: "P2P: A Lending Tracker App", role: "Full Stack Developer", stack: "PHP, MariaDB, jQuery", date: "June 2023", github: "https://github.com/Danke86/P2P-Loan-Tracker", website: null, image: p2p, description: "P2P: A Lending Tracker App is a robust information system designed to digitize and manage transactions related to money lending among friends or within groups. This app allows users to record, track, and settle expenses efficiently, ensuring transparency and accountability in financial dealings. Users can add, modify, or delete records of expenses, friends, and groups. The app also generates comprehensive reports, including detailed views of all expenses within a specific timeframe, expenses associated with particular friends or groups, current balance summaries, and the status of outstanding balances. This makes it an essential tool for managing personal finances and group expenditures, simplifying the process of keeping track of debts and shared costs." },
    { number: 5, title: "Clearance Application System", role: "Backend Developer", stack: "MERN", date: "June 2023", github: "https://github.com/airanatividad/clearance-application-site", website: null, image: cas, description: "The Clearance Application System is designed to facilitate and organize the process of obtaining academic clearances at the Institute of Computer Science. This digital system allows students to apply for clearances, submit necessary documents such as GitHub links, and track the status of their applications. Faculty members use the system to review submissions, provide feedback, and approve or return applications for further revisions. By automating and structuring the clearance process, the system ensures that approvals are completed in the correct sequence and provides transparency for all parties involved. This streamlined approach not only simplifies administrative workflows but also enhances communication between students and faculty." },
    { number: 6, title: "COVID-19 Health Monitoring Mobile App", role: "Full Stack Developer", stack: "Flutter, Firebase", date: "June 2023", github: "https://github.com/CMSC-23-2nd-Sem-2022-2023/project-atienza_iloso_natividad_taag", website: null, image: flutter, description: "This Health Monitoring App is a collaborative project designed to manage health data efficiently, tailored specifically for use in educational settings. It allows users to log daily health entries, highlighting any symptoms they might have, which influences their access to campus facilities via a QR code system. If symptoms are detected, or if the user has been in contact with a COVID-19 case, the QR code for building access will not be generated. The app also manages data for students who are quarantined or under health monitoring. For administrators, the app offers detailed oversight of all entries, with capabilities to edit, delete, or quarantine students based on health reports. This ensures a safe environment for all campus activities by monitoring health risks effectively." }
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
