import React from 'react';
import './project.css'; // Importing the CSS file for styles
import placeholderImage from './react.jpg';

function Projects() {
  const tracks = [
    { number: 1, title: "PICSEL", artist: "Backend Developer", album: "MERN", dateAdded: "Mar 30, 2024", duration: "2:59", image: placeholderImage },
    { number: 2, title: "Attention", artist: "NewJeans", album: "NewJeans 1st EP 'New Jeans'", dateAdded: "Mar 30, 2024", duration: "3:00", image: placeholderImage },
    { number: 3, title: "Cookie", artist: "NewJeans", album: "NewJeans 1st EP 'New Jeans'", dateAdded: "Mar 30, 2024", duration: "3:56", image: placeholderImage }
  ];

  return (
    <div className="right-column">
      <div className="playlist-container">
        <div className="projects-title-card">
          <img src={placeholderImage} alt="Project Icon" className="title-icon" />
          <h1>Projects</h1>
        </div>
        <div className="playlist-header">
          <div className="track-number">#</div>
          <div className="track-info">Title</div>
          <div className="track-album">Album</div>
          <div className="track-added">Date Added</div>
          <div className="track-duration">Duration</div>
        </div>
        <div className="playlist-items">
          {tracks.map((track, index) => (
            <div key={index} className="playlist-item">
              <div className="track-number">{track.number}</div>
              <div className="track-info">
                <img src={track.image} alt="Album Art" className="track-image" />
                <div>
                  <div className="track-title">{track.title}</div>
                  <div className="track-artist">{track.artist}</div>
                </div>
              </div>
              <div className="track-album">{track.album}</div>
              <div className="track-added">{track.dateAdded}</div>
              <div className="track-duration">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
