import React from 'react'
import Typed from 'typed.js'
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Backend Developer','Web Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
        <div className="background-img" data-aos="zoom-out" data-aos-duration='1000' id='home'>
            <div className="text-area" data-aos="fade-right" data-aos-duration='1000'>
                <div className="hi">Hi There! I am</div>
                <h2 className="name">RAMCHARAN PATIDAR</h2>
                <h3 className='profession'>and I'm <span ref={el}></span></h3>
                <div className="links">
                    <a href="https://www.linkedin.com/in/ram795/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/ram7909" target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/_ram_795/?hl=en" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home