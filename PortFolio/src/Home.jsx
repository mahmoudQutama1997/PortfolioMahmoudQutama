
import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import aiIm from "./assets/mahmoud.jpg";
import aiImg from "./assets/ai.png";
import './App.css'
function Home() { 
     return (
        <div className="container">
           
          {/* LEFT CARD */}
          <section className="side-card">
            <Hero />
             
          </section>
    <section className="projects-section">
    
    </section>
          {/* RIGHT SECTION */}
          <section className="mainHero">
    
            {/* NAVBAR */}
            <nav className="navbar">
    
              <h2 className="logo">
                <span>{'{'}</span>
                MQ
                <span className="dot">•</span>
                <span>{'}'}</span>
              </h2>
    
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li>
      <Link to="/about">About</Link>
    </li>
    
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
    
              <button className="talk-btn">
                Let’s Talk
              </button>
    
            </nav>
    
            {/* HERO CONTENT */}
            <div className="main-content">
    
              {/* LEFT */}
              <div className="main-left">
    
                <p className="icon">Full Stack Developer</p>
    
                <h1>
                  Turning Ideas <br />
                  Into <span>Digital</span> <br />
                  Reality.
                </h1>
    
                <p className="main-text">
                  I build exceptional digital experiences
                  that are fast, accessible and responsive.
                </p>
    
                <div className="hero-buttons">
    
                  <button>
                    View Work <ArrowUpRight size={20} />
                  </button>
    
                  <button>
                    Download CV <Download size={20} />
                  </button>
    
                </div>
    
              </div>
    
              {/* RIGHT */}
              <div className="main-right">
    
                <div className="circle"></div>
    
                <img
                  src={aiIm}
                  alt=""
                  className="hero-person"
                />
    
                <div className="floating top">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
    
                <div className="floating middle">
                  <h3>20+</h3>
                  <p>Happy Clients</p>
                </div>
    
                <div className="floating bottom">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
    
              </div>
    
            </div>
    
          </section>
    
        </div>
        
      )
    }
    
    function Hero() {
      return (
        <section className="hero">
    
          <div className="hero-left">
    
            <h2 className="logo">
              <span>{'{'}</span>
              MQ
              <span className="dot">•</span>
              <span>{'}'}</span>
            </h2>
    
            <p className='icon'>Full Stack Developer</p>
    
            <h1>
              Turning Ideas Into
              <span> Digital </span>
              Reality
            </h1>
    
            <p>
              I build fast and responsive apps
              and exceptional digital experiences.
            </p>
    
            <div className="hero-buttons">
    
              <button>
                View Work <ArrowUpRight size={20} />
              </button>
    
              <button>
                Download CV <Download size={20} />
              </button>
    
            </div>
    
            <ul className='list'>
    
              <li>
                <h2>50+</h2>
                <p>Projects Completed</p>
              </li>
    
              <li>
                <h2>20+</h2>
                <p>Happy Clients</p>
              </li>
    
              <li>
                <h2>3+</h2>
                <p>Years Experience</p>
              </li>
    
            </ul>
    
            <h3>Featured Project</h3>
    
            <img src={aiImg} alt="AI Image" />
    
            <div className="project-info">
    
              <h4>AI-OpenCv Hands Detection</h4>
    
              <a href="">
                View Project
                <ArrowUpRight size={18} />
              </a>
    
            </div>
    
          </div>
    
        </section>
      )
    }
    export default Home;