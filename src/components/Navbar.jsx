import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav>

      <section className="btm" data-aos="fade-up" data-aos-duration='1000'>
        <div className='btm-btn'>
          <a
            href="#home"
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a
            href="#portfolio"
            className={activeLink === 'portfolio' ? 'active' : ''}
            onClick={() => handleLinkClick('portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#services"
            className={activeLink === 'services' ? 'active' : ''}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </a>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </div>
      </section>

    </nav>
  );
}

export default Navbar;
