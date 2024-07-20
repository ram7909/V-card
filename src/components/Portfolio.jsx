import React from 'react'

const Portfolio = () => {
    return (
        <>
            <section className='portfolio' id='portfolio'>
                <h1 className="heading" data-aos="fade-right" data-aos-duration='1000'>PORTFOLIO</h1>
                <div className="p-img" data-aos="flip-right" data-aos-duration='1000'>
                    <div className="container">
                        <div className="link">
                            <a href='https://youtube-clone-a9sj.vercel.app/' className="fa-solid fa-arrow-up-right-from-square" target='_blank'></a>
                        </div>
                        <p>Youtube</p>
                    </div>
                </div>
                <div className="p-img1" data-aos="flip-left" data-aos-duration='1000'>
                    <div className="container">
                        <div className="link">
                            <a href='https://react-shopping-cart-phi-three.vercel.app/' className="fa-solid fa-arrow-up-right-from-square" target='_blank'></a>
                        </div>
                        <p>Quik.Buy</p>
                    </div>
                </div>
                <div className="p-img2" data-aos="flip-right" data-aos-duration='1000'>
                    <div className="container">
                        <div className="link">
                            <a href='https://to-do-list-kappa-rosy.vercel.app/' className="fa-solid fa-arrow-up-right-from-square" target='_blank'></a>
                        </div>
                        <p>To-do App</p>
                    </div>
                </div>
                    
            </section>
        </>
    )
}

export default Portfolio