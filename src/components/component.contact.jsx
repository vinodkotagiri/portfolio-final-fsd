import React, { useState } from 'react'
import { SendFill, Mailbox2 } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
const Contact = () => {
    const MAX_MESSAGE_LENGTH = 250
    const [length, setLength] = useState(0)
    const handleChange = (event) => {
        const currentLength = event.target.value.length;
        setLength(currentLength)
    }
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transitionDuration: '0.3s' }}>
            <div className='container text-center mt-3'>
                <div className='title-div container'>
                    <Mailbox2 size={32} color={'#0077B7'} />
                    <h1 className='page-title'>Contact Me</h1>
                </div>
                <form className='row gy-3 mt-5'>
                    <div class="input-group">
                        <span class="input-group-text">First Name</span>
                        <input type="text" aria-label="First name" class="form-control" required />
                        <span class="input-group-text">Last Name</span>
                        <input type="text" aria-label="Last name" class="form-control" required />
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Email</span>
                        <input type="email" aria-label="First name" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="input-group-text mb-3">Leave a Message for me</label>
                        <textarea onChange={(event) => handleChange(event)} class="form-control" id="exampleFormControlTextarea1" rows="4" style={{ resize: 'none' }} required></textarea>
                        <p style={{ float: 'right' }}>{length} of <strong>{MAX_MESSAGE_LENGTH} characters</strong> composed</p>
                    </div>

                    <div className='container'>
                        <button type='submit' className='btn btn-large btn-primary' style={{ width: '25%' }}>Send<SendFill size={20} className='mx-3' /></button>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact