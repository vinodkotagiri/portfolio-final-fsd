import React from 'react'
import { motion } from 'framer-motion'
import { JournalBookmark } from 'react-bootstrap-icons'
const Portfolio = () => {
    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            exit={{ y: window.innerHeight, opacity: 0, transitionDuration: '0.5s' }}>

            <div className='title-div container mt-3'>
                <JournalBookmark color={'#0077B7'} size={32} />
                <h1 className='page-title'>Portfolio</h1>
            </div>
        </motion.div>
    )
}

export default Portfolio