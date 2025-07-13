import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [expanding, setExpanding] = useState(false);

  const handleClick = () => {
    setExpanding(true);
  };

  const handleAnimationEnd = () => {
    if (expanding) navigate('/about');
  };

  return (
    <div className="home">
      <h1>Hi, I’m Jason Dai</h1>
      <p>Full-Stack Developer • Math Enthusiast • Music Lover</p>

      {/* Overlay circle */}
      {expanding && (
        <div 
          className="expand-overlay" 
          onAnimationEnd={handleAnimationEnd}
        />
      )}

      {/* Play button */}
      <button
        className="home-play-button"
        onClick={handleClick}
        aria-label="Go to Profile"
      >
        <FaPlay />
      </button>
    </div>
  );
}
