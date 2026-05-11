import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    axios
      .get(`${API}/api/about`)
      .then((res) => {
        console.log("DATA:", res.data);
        setAbout(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!about) {
    return <p className="loading">Loading About...</p>;
  }

  return (
    <section className="about-container">

      <h1 className="section-title">About Me</h1>

      <div className="about-card">

        <h1>{about.personal_info.name}</h1>

        <h3>{about.personal_info.title}</h3>

        <p className="bio">
          {about.personal_info.bio}
        </p>

        <div className="info-box">
          <h4>Education</h4>
          <p>{about.education.field}</p>
          <p>{about.education.academy}</p>
        </div>

        <div className="info-box">
          <h4>Frontend Skills</h4>
          <div className="skills">
            {about.skills.frontend.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h4>Backend Skills</h4>
          <div className="skills">
            {about.skills.backend.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;