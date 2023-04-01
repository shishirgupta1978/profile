import React,{useState} from 'react'
import './Navbar.scss'
import {NavLink} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

export const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick=()=> setClick(!click)
    const [color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY >= 100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

 window.addEventListener("scroll",changeColor);
  return (
    <header className={color ? 'header-bg':""}>
        <NavLink to="/"><h1><span className='logo'>SG</span> Portfolio</h1></NavLink>
      <nav className={ click ? "active":""}>
        <NavLink to="/profile/home">Home</NavLink>
        <NavLink to="/profile/projects">Project</NavLink>
        <NavLink to="/profile/about">About</NavLink>
        <NavLink to="/profile/contact">Contact</NavLink>
      </nav>
      <div className='hamburger' onClick={handleClick}>
        {click ? <FaTimes size={30} style={{color:"#fff"}}/> : <FaBars size={30} style={{color:"#fff"}}/> }
        
        
      </div>
    </header>
  )
}


