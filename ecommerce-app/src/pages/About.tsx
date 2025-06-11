import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-images left">
          <img src="/coder.jpg" alt="Developer" className="image-left" />
        </div>

        <div className="about-text">
          <h2>About Developer</h2>
          <p>
            I'm Danial, a passionate Software Engineer with 1 year of hands-on experience in building web applications. I specialize in frontend development using React and TypeScript, and I have a solid understanding of backend technologies like Node.js and Express.
          </p>
          <p>
            Over the past year, I've worked on several real-world projects where I’ve contributed to responsive UI design, REST API integration, and performance optimization.
          </p>
          <p>
            I enjoy solving complex problems and continuously learning new tools and frameworks. I’m a strong believer in clean code, user-centered design, and teamwork.
          </p>
          <p>My goal is to keep growing as a full-stack developer and contribute to impactful, modern software solutions.</p>
          <ul>
            <li>✔️ Over 1 year in web development</li>
            <li>✔️ Experience with TypeScript, Prisma, and MongoDB</li>
            <li>✔️ Focused on accessibility and performance</li>
            <li>✔️ Strong reputation across local communities</li>
          </ul>
          <Link to="https://github.com/Dancho190" className="learn-more-btn">Learn More</Link>
        </div>

        <div className="about-images right">
          <img src="/aimaq.jpeg" alt="Project" className="image-right" />
        </div>
      </div>
    </section>
  );
};

export default About;