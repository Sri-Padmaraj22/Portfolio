import React, { useRef } from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const menuRef=useRef();
  const openMenu=()=>{
  menuRef.current.style.right="0";
  setisMenuOpen(true);
  }
  const closeMenu=()=>{
  menuRef.current.style.right="-350px";
  setisMenuOpen(false);
  }
  return (
    <div id='about' className='navbar'>
      <img src={logo} alt="" />
     {!isMenuOpen && (
        <img src={menu_open} onClick={openMenu} alt="menu" className='nav-mob-open'/>
    )}
      <ul ref={menuRef}className='nav-menu'>
       {isMenuOpen && (
  <img src={menu_close} onClick={closeMenu} alt="close" className='nav-mob-close'/>
)}
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink onClick={()=> setMenu('about1')} className='anchor-link' offset={80} href='#about1'><p >About Me</p></AnchorLink>{menu==="about1"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#qualifications'><p onClick={()=> setMenu("qualifications")}>Qualifications</p></AnchorLink>{menu==="qualifications"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=> setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="" />:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink onClick={()=> setMenu('contact')} className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
