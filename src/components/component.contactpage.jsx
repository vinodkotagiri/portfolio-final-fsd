import React from 'react'
import { Stack, TextField, Typography } from '@mui/material'
const ContactPage = () => {
    return (
        <div>
            <Typography variant='h3' color='primary' sx={{ marginBottom: '5rem' }}>
                Contact Me
            </Typography>
            <Stack gap={2}>
                <TextField fullWidth label="First Name" id="fullWidth" />
                <TextField fullWidth label="Last Name" id="fullWidth" />
                <textarea
                    aria-label="empty textarea"
                    placeholder="Empty"
                    id='fullWidth'
                    style={{ resize: 'none' }}
                />
            </Stack>

        </div>
    )
}

export default ContactPage