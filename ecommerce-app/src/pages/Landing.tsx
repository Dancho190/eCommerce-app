import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Threads from '../components/Threads'
import BlurText from '../components/BlurText'
import './Landing.css'

const Landing = () => {
    const navigate = useNavigate();

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <div style={{ width: '100%', height: '800px', position: 'relative' }}>
     <Threads
    amplitude={4}
    distance={0}
    enableMouseInteraction={true}
  />
  <div className="text-overlay">
        <BlurText
          text="Welcome to AIMAQ."
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="blur-text"
        />
            <BlurText
      text="Aimaq Store — это концептуальный онлайн-магазин, сочетающий современный дизайн и технологичность."
      delay={300}
      animateBy="words"
      direction="bottom"
      className="blur-subtext"
      />
      <div className="button-group">
        <button className="explore-button" onClick={()=> navigate('/home')}>Explore</button>
        <button className="explore-button">GitHub</button>
        </div>
      </div>
</div>
  )
}

export default Landing
