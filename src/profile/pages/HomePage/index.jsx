import React from 'react';
import { Link } from 'react-router-dom';
import { IntroImg } from "../../assets";
import "./HomePage.scss"
export const HomePage = () => {

  return (
    <>
      <div className='intro'>
        <div className='mask'>
          <img className="intro-img" src={IntroImg} alt="Intro" />
        </div>

        <div className="content">

          <p>Experience in integrating Django with React.</p>
          <p>(Python, C#, React)</p>
          <h1>Software Developer</h1>
          <Link to="/profile/projects" className='btn'>Projects</Link>
          <Link to="/profile/contact" className='btn btn-light'>Contact</Link>

        </div>

      </div>


    </>


  )
}

