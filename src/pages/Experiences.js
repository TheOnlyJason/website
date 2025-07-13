import React from "react";
import { FaPlay } from "react-icons/fa";
import experiences from "../data/experiences";
import projects    from "../data/projects";
import "./Experiences.css";

export default function Experiences() {
  return (
    <section className="exp-page">

      {/* Dashboard title */}
      <h1 className="dashboard-title">Dashboard</h1>

      {/* EXPERIENCES */}
      <h1>Experiences</h1>
      <div className="exp-row">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card">
            <div className="exp-header">
              <h2>{exp.company}</h2>
              <span className="exp-date">{exp.date}</span>
            </div>
            <h3 className="exp-role">{exp.role}</h3>
            <ul className="exp-bullets">
              {exp.bullets.map((b,j) => <li key={j}>{b}</li>)}
            </ul>

            {exp.link && (
              <button
                className="play-button"
                onClick={() => window.open(exp.link, "_blank")}
                aria-label={`Visit ${exp.company}`}
              >
                <FaPlay />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <h1 style={{ marginTop: "4rem" }}>Projects</h1>
      <div className="exp-row">
        {projects.map((pro, i) => (
          <div key={i} className="exp-card">
            <div className="exp-header">
              <h2>{pro.title}</h2>
              <span className="exp-date">{pro.subtitle}</span>
            </div>
            <h3 className="exp-role">Stack</h3>
            <ul className="exp-bullets">
              {pro.bullets.map((b,j) => <li key={j}>{b}</li>)}
            </ul>

            {pro.link && (
              <button
                className="play-button"
                onClick={() => window.open(pro.link, "_blank")}
                aria-label={`View project ${pro.title}`}
              >
                <FaPlay />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
