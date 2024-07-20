import React from 'react'

const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <h1 data-aos="fade-right" data-aos-duration='1000' className="heading">ABOUT ME</h1>
                <p className='abt-me' data-aos="fade-up-left" data-aos-duration='1000'>I'm a passionate MERN Stack Developer eager to create engaging websites. Let's work together to build dynamic web applications using MongoDB, Express.js, React, and Node.js. I focus on making user-friendly designs that are both powerful and scalable. Let's collaborate and innovate, ensuring every project goes above and beyond expectations.</p>
                <div className="details" data-aos="zoom-in" data-aos-duration='1000'>
                    <p><span>Name :</span> Ramcharan Patidar</p>
                    <p><span>Phone :</span>  <a href="tel:9171961582">+91 91719 61582</a></p>
                    <p><span>E-mail :</span> <a href="mailto:ramcharanmain07@gmail.com">ramcharanmain07@gmail.com</a></p>
                    <p><span>Location :</span> <a href="https://maps.app.goo.gl/wvXxHCmRqRiYtf549">Indore, Madhya Pradesh, India</a></p>
                    <p><span>Date of Birth :</span> 07 September 2005</p>
                    <p><span>Freelance :</span> Available</p>
                </div>
                <div className="i-do">
                    <h1 className="head">WHAT CAN I DO</h1>
                    <div className="container" data-aos="fade-right" data-aos-duration='1000'>
                        <i className="fa-solid fa-code"></i>
                        <h3>Web Development</h3>
                    </div>
                    <div className="container" data-aos="fade-left" data-aos-duration='1000'>
                    <i className="fa-solid fa-display"></i>
                        <h3>Web Design</h3>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About