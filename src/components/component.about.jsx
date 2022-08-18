import React from 'react'
import { PersonBoundingBox } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
import { AuthorImg } from '../assets/images'
const About = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transitionDuration: '0.3s' }}>

            <div className='title-div container mt-3'>
                <PersonBoundingBox color={'#0077B7'} size={32} />
                <h1 className='page-title'>About</h1>
            </div>
            <div className='about-div'>
                <img src={AuthorImg} alt='author-logo' className='author-logo col-md-6' />
                <div className='col-md-6'>
                    <p>Hello there! I am Vinod Kotagiri, an aspiring fullstack developer with hands on experience in developing fullstack web apps which are responsive, scalable, reliable and maintainable.

                    </p>
                </div>
            </div>

        </motion.div>
    )
}

export default About