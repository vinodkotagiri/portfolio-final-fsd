import React from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'react-bootstrap-icons'
import {
    HTML_IMG, CSS_IMG, JS_IMG, BS_IMG, TW_IMG, REACT_IMG,
    REDUX_IMG, AWS_IMG, GCP_IMG, FIRE_IMG, GIT_IMG,
    GQL_IMG, NODE_IMG, PYTHON_IMG, MONGO_IMG, MYSQL_IMG,
    LinkedinLogo, GithubLogo, MailLogo
} from '../assets/images'
const Skills = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transitionDuration: '0.5s' }}>

            <div className='title-div container mt-3'>
                <Cpu color={'#0077B7'} size={32} />
                <h1 className='page-title'>Skills</h1>
            </div>
            <div className='container-fluid m-auto px-5'>
                <div className='row g-3' >

                    <div className='skill-container html-container me-5'>
                        <img src={HTML_IMG} className='skill-logo html' alt='skill-logo' />
                        <h4 className='skill-text html'>HTML</h4>
                    </div>

                    <div className='skill-container html-container me-5'>
                        <img src={HTML_IMG} className='skill-logo html' alt='skill-logo' />
                        <h4 className='skill-text html'>HTML</h4>
                    </div>

                    <div className='skill-container html-container me-5'>
                        <img src={HTML_IMG} className='skill-logo html' alt='skill-logo' />
                        <h4 className='skill-text html'>HTML</h4>
                    </div>

                    <div className='skill-container html-container me-5'>
                        <img src={HTML_IMG} className='skill-logo html' alt='skill-logo' />
                        <h4 className='skill-text html'>HTML</h4>
                    </div>

                    <div className='skill-container html-container me-5'>
                        <img src={HTML_IMG} className='skill-logo html' alt='skill-logo' />
                        <h4 className='skill-text html'>HTML</h4>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Skills