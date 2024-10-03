import React from 'react'
import portfolioweb from '../assets/Portfoilioweb.png'
// import alien_invasion from '../assets/alien_invasion.jpg'
import face from '../assets/face.png'
// import falcon from '../assets/falcon.jpeg'
// import frisbee from '../assets/frisbee.jpeg'
// import wiki from '../assets/wiki.jpeg'

const Projects = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="container projects__container">
                <article className="projects__item hover">
                    <div className="projects-img">
                        <img src={portfolioweb} alt="project image" />
                    </div>
                    <h3>Portfolio Website</h3>
                    <a href="https://github.com/Atharv2433/Portfolio" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={face} alt="project image" />
                    </div>
                    <h3>Face Recognition Attendance System</h3>
                    <a href="https://github.com/Atharv2433/Face-Recognition-Attendance-System-" className="btn" target="_blank">Github</a>
                </article>
                
                
                
                
            </div>
            <div className="more">
                <a href="https://github.com/Atharv2433" target="_blank" className="btn btn-primary center">See More</a>
            </div>
        </section>
    )
}

export default Projects