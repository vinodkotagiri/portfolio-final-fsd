import React from 'react'
import ParticleBg from 'particles-bg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Eye, FileEarmarkPerson } from 'react-bootstrap-icons'


import {
    HTML_IMG, CSS_IMG, JS_IMG, BS_IMG, TW_IMG, REACT_IMG,
    REDUX_IMG, AWS_IMG, GCP_IMG, FIRE_IMG, GIT_IMG,
    GQL_IMG, NODE_IMG, PYTHON_IMG, MONGO_IMG, MYSQL_IMG,
    LinkedinLogo, GithubLogo, MailLogo
} from '../assets/images'
const Hero = () => {
    const navigate = useNavigate()
    const ResumeURL = 'https://1drv.ms/b/s!AqUO-r5Zn68aieYq4jZ_LEf9aDFv4A'
    return (
        <>
            <motion.div
                className='container-fluid text-center py-5 m-auto hero'
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                exit={{ y: window.innerHeight, transitionDuration: '0.3s' }}>
                <h1 className='mt-5 pt-2'>Hello, I'm <em><span style={{ color: '#0096FF' }}>Vinod Kotagiri</span></em></h1>
                <h2 className='mb-5' style={{ color: 'gray' }}>A Fullstack Web Developer</h2>
                <button className='btn btn-primary btn-large mx-2' onClick={() => navigate('portfolio')}>View My Work<Eye className='ms-2' size={20} /></button>
                <button className='btn btn-secondary btn-large mx-2' onClick={() => window.open(ResumeURL, '_blank')}>Resume<FileEarmarkPerson className='ms-2' size={18} /></button>

            </motion.div>
            <div className='social-band linkedin'>
                <a href='https://www.linkedin.com/in/kotagiri-vinod-a10ba856/' target='_blank' rel='noreferrer'>
                    <p className='social-text'>LinkedIn</p>
                    <img src={LinkedinLogo} alt='inkedin-logo' className='social-logo '></img>
                </a>
            </div>
            <div className='social-band github'>
                <a href='https://github.com/vinodkotagiri' target='_blank' rel='noreferrer'>
                    <p className='social-text'>Github</p>
                    <img src={GithubLogo} alt='inkedin-logo' className='social-logo  '></img>
                </a>
            </div>
            <div className='social-band mail'>
                <a href='mailto:vinodkotagiri@icloud.com' target='_blank' rel='noreferrer'>
                    <p className='social-text'>Contact Me</p>
                    <img src={MailLogo} alt='inkedin-logo' className='social-logo '></img>
                </a>
            </div>
            <ParticleBg type='cobweb' color='#e9e9e9' bg={true} />
            <img src={HTML_IMG} alt='html logo' className='logo html-logo' />
            <img src={CSS_IMG} alt='html logo' className='logo css-logo' />
            <img src={JS_IMG} alt='html logo' className='logo js-logo' />
            <img src={BS_IMG} alt='html logo' className='logo bs-logo' />
            <img src={TW_IMG} alt='html logo' className='logo tw-logo' />
            <img src={REACT_IMG} alt='html logo' className='logo react-logo' />
            <img src={REDUX_IMG} alt='html logo' className='logo redux-logo' />
            <img src={NODE_IMG} alt='html logo' className='logo node-logo' />
            <img src={GQL_IMG} alt='html logo' className='logo gql-logo' />
            <img src={MONGO_IMG} alt='html logo' className='logo mongo-logo' />
            <img src={MYSQL_IMG} alt='html logo' className='logo msql-logo' />
            <img src={GIT_IMG} alt='html logo' className='logo git-logo' />
            <img src={FIRE_IMG} alt='html logo' className='logo fire-logo' />
            <img src={AWS_IMG} alt='html logo' className='logo aws-logo' />
            <img src={GCP_IMG} alt='html logo' className='logo gcp-logo' />
            <img src={PYTHON_IMG} alt='html logo' className='logo py-logo' />
        </>
    )
}

export default Hero