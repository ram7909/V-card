import React from 'react'

const service = () => {
  return (
    <>
      <section className="services" id="services">
        <h1 className="heading" data-aos="fade-right" data-aos-duration='1000'>SERVICES</h1>
        <div className="i-do service">
                    <div className="container" data-aos="fade-up-left" data-aos-duration='1000'>
                        <i className="fa-solid fa-code"></i>
                        <h3>Web Development</h3>
                        <p>Web development encompasses the creation and maintenance of websites using programming languages like HTML, CSS, JavaScript, React , Express, Node and MongoDB. It involves building both front-end interfaces for user interaction and back-end systems for data management.</p>
                    </div>
                    <div className="container" data-aos="fade-up-right" data-aos-duration='1000'>
                    <i className="fa-solid fa-display"></i>
                        <h3>Web Design</h3>
                        <p>Web design focuses on the aesthetic and user experience aspects of websites. Designers use tools like Adobe XD or Sketch to create visually appealing layouts, select color schemes, typography, and other visual elements that align with the brand’s identity.</p>
                    </div>
                </div>
      </section>

    </>
  )
}

export default service