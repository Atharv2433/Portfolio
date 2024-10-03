import React from 'react'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

const Contacts = () => {
    return (
        <section id="contact">
            <div className="contact__container">
                <a href="https://www.linkedin.com/in/atharv-joundal-9b7aa1287/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/Atharv2433" target="_blank"><AiOutlineGithub /></a>
                <a href="mailto:atharvjoundal39@gmail.com"><CgMail /></a>
            </div>
        </section>
    )
}

export default Contacts