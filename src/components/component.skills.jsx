import React from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'react-bootstrap-icons'
import {
    HTML_IMG, CSS_IMG, JS_IMG, BS_IMG, TW_IMG, REACT_IMG,
    REDUX_IMG, AWS_IMG, GCP_IMG, FIRE_IMG, GIT_IMG,
    GQL_IMG, NODE_IMG, PYTHON_IMG, MONGO_IMG, MYSQL_IMG,
    LinkedinLogo, GithubLogo, MailLogo, ANT_IMG, MUI_IMG, FIGMA_IMG
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
            <div className='container'>
                <div className='d-flex flex-row justifuy-content-between flex-wrap' >

                    <div className='skill-container html-container m-2 '>
                        <img src={HTML_IMG} className='skill-logo html' alt='skill-logo' />
                        <h4 className='skill-text html'>HTML</h4>
                    </div>

                    <div className='skill-container css-container m-2 '>
                        <img src={CSS_IMG} className='skill-logo css' alt='skill-logo' />
                        <h4 className='skill-text css'>CSS</h4>
                    </div>

                    <div className='skill-container js-container m-2'>
                        <img src={JS_IMG} className='skill-logo js' alt='skill-logo' />
                        <h4 className='skill-text js'>JavaScript</h4>
                    </div>

                    <div className='skill-container bs-container m-2'>
                        <img src={BS_IMG} className='skill-logo bs' alt='skill-logo' />
                        <h4 className='skill-text bs'>Bootstrap</h4>
                    </div>

                    <div className='skill-container tw-container m-2'>
                        <img src={TW_IMG} className='skill-logo tw' alt='skill-logo' />
                        <h4 className='skill-text tw'>Tailwind</h4>
                    </div>

                    <div className='skill-container mui-container m-2'>
                        <img src={MUI_IMG} className='skill-logo mui' alt='skill-logo' />
                        <h4 className='skill-text mui'>Maiterial UI</h4>
                    </div>

                    <div className='skill-container antd-container m-2'>
                        <img src={ANT_IMG} className='skill-logo antd' alt='skill-logo' />
                        <h4 className='skill-text antd'>Ant Design</h4>
                    </div>

                    <div className='skill-container figma-container m-2'>
                        <img src={FIGMA_IMG} className='skill-logo figma' alt='skill-logo' />
                        <h4 className='skill-text figma'>Figma</h4>
                    </div>

                    <div className='skill-container react-container m-2'>
                        <img src={REACT_IMG} className='skill-logo react' alt='skill-logo' />
                        <h4 className='skill-text react'>React</h4>
                    </div>


                    <div className='skill-container redux-container m-2'>
                        <img src={REDUX_IMG} className='skill-logo redux' alt='skill-logo' />
                        <h4 className='skill-text redux'>Redux</h4>
                    </div>
                    <div className='skill-container node-container m-2'>
                        <img src={NODE_IMG} className='skill-logo node' alt='skill-logo' />
                        <h4 className='skill-text node'>NodeJS</h4>
                    </div>

                </div>
            </div>
        </motion.div >
    )
}

export default Skills