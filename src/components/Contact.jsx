import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <h1 className="heading" data-aos="fade-right" data-aos-duration='1000'>CONTACT</h1>
                <div className="contact-details" data-aos="zoom-in-up" data-aos-duration='1000'>
                    <a href='mailto:ramcharanmain07@gmail.com' className="email">
                        <i className="fa-solid fa-envelope"></i>
                        <p>ramcharanmain07@gmail.com</p>
                    </a>
                    <a href='tel:9171961582' className="phone">
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 91719 61582</p>
                    </a>
                    <div className="i-do hd">
                        <h1 className="head">GET IN TOUCH</h1>
                    </div>
                    <form>
                        <div className="first">
                            <input type="text" placeholder='Enter Full Name' />
                        </div>
                        <div className="second">
                            <input type="number" placeholder='Enter Phone Number' />
                            <input type="email" placeholder='Enter Email' />
                        </div>
                        <div className="third">
                            <textarea rows={4} cols={51} placeholder='Enter Your Message'></textarea>
                        </div>
                        <button>SEND</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Contact