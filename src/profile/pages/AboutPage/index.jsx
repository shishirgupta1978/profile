import React from 'react'
import './AboutPage.scss'
import { Link } from 'react-router-dom'
import {About1Img,About2Img} from "../../assets"
import { SectionImage } from '../../components'
export const AboutPage = () => {
    return (
        <>
            <SectionImage heading="ABOUT" text="I'm a Back-End Developer"/>

            <div className='about'>
                <div className='left'>
                    <h1>Who Am I?</h1>
                    <p>I am Shishir Gupta, MCA from IGNOU. I'm a Django/Python/C# Developer who is comfortable with JavaScript, Docker, Git, Django, React, Bootstrap, 
Django Rest API, SQL, ASP.NET, Redis, Regex, Celery, AWS.</p>
                    <Link to="/profile/contact"><button className='btn'>Contact</button></Link>
                </div>
                <div className='right'>
                    <div className='img-container'>
                        <div className='img-stack top'>
                            <img src={About2Img} className="img" alt="image1" />
                        </div>
                        <div className='img-stack bottom'>
                            <img src={About1Img} className="img" alt="image2" />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

