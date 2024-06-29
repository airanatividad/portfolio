import React, { useState } from 'react';
import './project.css';
import placeholderImage from './react.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
function Projects() {
  const [expanded, setExpanded] = useState(null); // State to keep track of expanded item

  const tracks = [
    { number: 1, title: "PICSEL", role: "Backend Developer", stack: "MERN", date: "June 2024", github: "https://github.com/airanatividad/portfolio", website: "https://picsel-e4l.vercel.app/", image: placeholderImage, description: "Developing backend using MongoDB, Express, React, and Node.js." },
    { number: 2, title: "Attention", role: "NewJeans", stack: "NewJeans 1st EP 'New Jeans'", date: "June 2024", github: "https://github.com/example2", website: null, image: placeholderImage, description: "Contribution to the design and development of a music album project." },
    { number: 3, title: "Cookie", role: "NewJeans", stack: "NewJeans 1st EP 'New Jeans'", date: "June 2024", github: null, website: "https://example3.com", image: placeholderImage, description: "Part of the production team for a popular music track." }
  ];

  const toggleExpansion = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expansion
  };

  return (
    <div className="right-column">
      <div className="playlist-container">
        <div className="projects-title-card">
          <img src={placeholderImage} alt="Project Icon" className="title-icon" />
          <h1>Projects</h1>
        </div>
        <div className="playlist-header">
          <div className="track-number">#</div>
          <div className="track-info">Project</div>
          <div className="track-album">Tech Stack</div>
          <div className="track-added">Date</div>
          <div className="track-duration">Links</div>
        </div>
        <div className="playlist-items">
        {tracks.map((track, index) => (
          <React.Fragment key={index}>
            <div className={`playlist-item ${expanded === index ? "expanded" : ""}`} onClick={() => toggleExpansion(index)}>
              <div className="track-details">
                <div className="track-number">{track.number}</div>
                <div className="track-info">
                  <img src={track.image} alt="Album Art" className="track-image" />
                  <div>
                    <div className={`track-title ${expanded === index ? "expanded-title" : ""}`}>{track.title}</div>
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
              {expanded === index && (
                <div className="track-description">{track.description}</div>
              )}
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
