import React from 'react';
import './Navbar.css'

function Header() {
  return (
    <div className='headercontainer'>
    
      <nav>
      <ul className='menu'>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
  <li><a href="signup.asp">Newsletter</a></li>
  
</ul>
<h1 className='header'>
HELLO! WELCOME TO UNSPLASH PHOTO GALLERY WITH CREATIVE & UNIQUE STYLE</h1>
 </nav>
   
    </div>
  );
}

export default Header;


