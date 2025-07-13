import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import { FaPlay } from 'react-icons/fa';
import './About.css';

export default function About() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);

  const handleContainerClick = () => {
    setFlipped(prev => !prev);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation(); // prevent the flip
    navigate('/experiences');
  };

  return (
    <div className="about-page">
      {/* PAGE-LEVEL HEADING */}
      <div className="welcome-title">About Me</div>

      {/* FLIP CARD */}
      <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        onClick={handleContainerClick}
      >
        <div className="flipper">

          {/* FRONT SIDE */}
          <section className="about front">
            <div className="name">Jason Dai</div>

            <div className="about__image-container">
              <img
                src={profilePic}
                alt="Portrait of Jason Dai"
                className="about__image"
              />
              <button
                className="play-button"
                onClick={handlePlayClick}
                aria-label="Go to Experiences"
              >
                <FaPlay />
              </button>
            </div>

            <div className="about__text">
              <p>
                I’m Jason Dai, a Full Stack Developer passionate about building performant,
                user-friendly web apps. Based in Los Angeles, I specialize in React, Node.js,
                and cloud-native architectures.
              </p>
            </div>
          </section>

          {/* BACK SIDE */}
          <section className="about back">
            <h1>Education</h1>
            <ul className="education-list">
              <li><strong>UCLA</strong> — B.S. Math of Computation, Sept 2023 – June 2025</li>
              <li><strong>Relevant Coursework:</strong> Algorithms, Data Structures, Web Dev, AI/ML</li>
              <li><strong>Awards:</strong> Presidential Award (×3), Math & CS Awards, Siemens Foundation Scholarship</li>
              <li><strong>Mt. SAC</strong> — A.S. Math, June 2020 – June 2023</li>
            </ul>
            <h1>Skills</h1>
            <ul className = "skill-list"> 
              <li><strong>Languages: C#, C/C++, Python, Java, Swift, JavaScript, TypeScript, Lua, SQL, Angular, Flask, yFinance, Bash, Microsoft .NET, Go</strong></li>
              <li><strong>Technologies: React, Node.js, Spark, Firebase, Raspberry Pi, Emacs, TensorFlow, Pytorch, TensorFlow, OpenAI API, NLP, Git</strong></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
