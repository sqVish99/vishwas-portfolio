import React, { useState, useEffect } from 'react';
import TranslucentContainer from '../../components/TranslucentContainer/TransluscentContainer';
import DisplayRow from '../../components/DisplayRow/DisplayRow';
import DisplayColumn from '../../components/DisplayColumn/DisplayColumn';
import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const sentences = ['\u00A0Full Stack Developer', '\u00A0Software Engineer', '\u00A0Designer', 'n AI Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }, 500);
      setTimeout(() => {
        setFlipping(false);
      }, 1000);
    }, 2000); 

    return () => {
      clearInterval(interval);
    };
  }, [sentences.length]);

  return (
    <TranslucentContainer
      backgroundcolor="rgba(58, 64, 52, 0.6)"
      fontcolor="#81ACDC"
    >
      <DisplayColumn>
        <h1>Welcome!</h1>
        <DisplayRow>
        Hi! I'm Vishwas. I am a 
          <div className={`flip-card ${flipping ? 'flipping' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {sentences[index]}
              </div>
              <div className="flip-card-back">
                {sentences[(index + 1) % sentences.length]}
              </div>
            </div>
          </div>
        </DisplayRow>
      </DisplayColumn>
    </TranslucentContainer>
  );
};

export default Home;