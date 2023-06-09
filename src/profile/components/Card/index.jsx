import React from 'react'
import './Card.scss'
import {NavLink} from 'react-router-dom';

export const Card = (props) => {
  return (
            <div className='project-card'>
                <img src={props.imgsrc} alt='image'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'><p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.view} className="btn" style={{width:'100%',textAlign:'center' }}>View</NavLink>
                  {/*  <NavLink to={props.source} className="btn  btn-light">Source</NavLink>*/}
                </div>
                </div>
            </div>

  )
}

