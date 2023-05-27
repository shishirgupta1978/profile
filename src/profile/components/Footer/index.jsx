import React from 'react'
import './Footer.scss'
import {FaHome,FaLinkedin,FaMailBulk,FaPhone,FaFacebook,FaTwitter} from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <address>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:"2rem"}}/>
                        
                        <p>Noida, India.</p>
                    
                </div>
               {/*  <div className='phone'>
                   <p><FaPhone size={20} style={{color:'#fff', marginRight:"2rem"}}/> 9015632911</p>              </div>*/}
                <div className='email'>
                    <p>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:"2rem"}}/> shishirgupta2011@gmail.com</p>
                </div>



            </address>
            <div className='right'>

            <h4>About Us</h4>
            <p>I am Shishir Gupta, MCA from IGNOU. I'm a Django/Python/C# Developer who is comfortable with JavaScript, Docker, Git, Django, React, Bootstrap, Django Rest API, SQL, ASP.NET, Redis, Regex, Celery, AWS.</p>
{/*            <div className='social'>
            <FaFacebook size={30} style={{color:'#fff', marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:'#fff', marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:'#fff', marginRight:"1rem"}}/>

  </div>*/}



            </div>

        </div>
      
    </footer>
  )
}

