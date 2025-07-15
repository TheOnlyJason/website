import React, { useState, useRef, useEffect } from 'react';
import { FaBackward, FaPlay, FaPause, FaForward } from 'react-icons/fa';
import experiences from '../data/experiences';
import projects from '../data/projects';
import './Spotify.css';

export default function Spotify() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const openPlayer = exp => {
    setNowPlaying(exp);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };
  const closePlayer = () => {
    setNowPlaying(null);
    setIsPlaying(false);
  };

  // Determine current index for skip logic
  const currentIndex = nowPlaying
    ? experiences.findIndex(e => e.company === nowPlaying.company)
    : -1;

  const playNext = () => {
    if (currentIndex < 0) return;
    const next = experiences[(currentIndex + 1) % experiences.length];
    openPlayer(next);
  };

  const playPrev = () => {
    if (currentIndex < 0) return;
    const prev =
      experiences[
        (currentIndex - 1 + experiences.length) % experiences.length
      ];
    openPlayer(prev);
  };

  // Wire up audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(audio.duration);
      audio.volume = 0.2;
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [nowPlaying]);

  const formatTime = secs => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section className="spotify-page">
      <h1>Experiences</h1>

      <div className="spotify-list">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="spotify-row"
            onClick={() => openPlayer(exp)}
          >
            <div className="spotify-index">{i + 1}</div>
            <div className="spotify-artwork">
              <div className="placeholder-artwork" />
            </div>
            <div className="spotify-info">
              <div className="spotify-title">{exp.company}</div>
              <div className="spotify-subtitle">{exp.role}</div>
            </div>
            <div className="spotify-plays">{exp.date}</div>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <h1 className="projects-heading">Projects</h1>
      <div className="spotify-list">
        {projects.map((pro, j) => (
          <div key={`pro-${j}`} className="spotify-row">
            <div className="spotify-index">{j + 1}</div>
            <div className="spotify-artwork">
              <div className="placeholder-artwork" />
            </div>
            <div className="spotify-info">
              <div className="spotify-title">{pro.title}</div>
              <div className="spotify-subtitle">{pro.subtitle}</div>
            </div>
            <div className="spotify-plays">
              <a
                href={pro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {nowPlaying && (
        <div className="player-modal" onClick={closePlayer}>
          <div className="player-box" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePlayer}>×</button>

            <h2 className="player-title">
              Now Playing:&nbsp;
              <a
                href={nowPlaying.link}
                target="_blank"
                rel="noopener noreferrer"
                className="player-company-link"
              >
                {nowPlaying.company}
              </a>
            </h2>

            <h3 className="section-heading">Key Achievements</h3>
            <ul className="lyrics-bullets">
              {nowPlaying.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>

            <h3 className="section-heading">Personal Growth</h3>
            <p className="personal-growth">{nowPlaying.personalGrowth}</p>

            {/* Custom Player Controls */}
            <div className="custom-player">
              <button
                className="spotify-skip-btn"
                onClick={playPrev}
                aria-label="Previous"
              >
                <FaBackward />
              </button>

              <button
                className="spotify-play-btn"
                onClick={() => {
                  const audio = audioRef.current;
                  if (!audio) return;
                  isPlaying ? audio.pause() : audio.play();
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button
                className="spotify-skip-btn"
                onClick={playNext}
                aria-label="Next"
              >
                <FaForward />
              </button>

              <div className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <audio
              ref={audioRef}
              src={nowPlaying.audioUrl}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
