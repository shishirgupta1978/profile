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

          <p>Hi, I'M A FREELANCER</p>
          <h1>React Developer</h1>
          <Link to="/profile/project" className='btn'>Projects</Link>
          <Link to="/profile/contact" className='btn btn-light'>Contact</Link>

        </div>

      </div>


    </>


  )
}

