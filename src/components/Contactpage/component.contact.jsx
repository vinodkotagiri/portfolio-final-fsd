import React from 'react';
import ParticlesBg from 'particles-bg';
import {
  Button,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { ContactMail, Send } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
const validationSchema = yup.object({
  firstName: yup
    .string('Enter your First Name')
    .min(3, 'First Name should be minimum 3 characters long')
    .max(20, 'First Name should be maximum 20 characters long')
    .required('*First Name is Required'),
  lastName: yup
    .string('Enter your Last Name')
    .min(3, 'Last Name should be minimum 3 characters long')
    .max(20, 'Last Name should be maximum 20 characters long')
    .required('*Last Name is Required'),
  email: yup
    .string('Enter your First Name')
    .email('Enter valid email address')
    .required('*Email is Required'),
  message: yup
    .string('Enter your Message')
    .min(50, 'Message should be minimum 50 characters long')
    .max(200, 'Message should be maximum 200 characters long')
    .required('*Message is Required'),
});
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: ' ',
};

const Contact = () => {
  const sendEmail = (values) => {
    let templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    };
    emailjs
      .send(
        'service_kjuek39',
        'template_2jvnlwp',
        templateParams,
        'srHBL7gISQA2U302c'
      )
      .then(
        (response) => console.log('Success!', response.text),
        (error) => console.log('Failed!', error)
      );
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => sendEmail(values),
  });

  return (
    <div>
      <ParticlesBg num={5} type='polygon' bg={true} />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
          marginBottom: '8px',
        }}
      >
        <Stack
          direction='row'
          gap={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <ContactMail sx={{ fontSize: '32px' }} color='secondary' />
          <Typography variant='h4' color='secondary'>
            Contact Me
          </Typography>
        </Stack>
      </Stack>

      <form onSubmit={formik.handleSubmit}>
        <Stack gap={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextField
            sx={{ backgroundColor: '#fff', width: 300 }}
            id='firstName'
            name='firstName'
            label='First Name'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            sx={{ backgroundColor: '#fff', width: 300 }}
            fullWidth
            id='lastName'
            name='lastName'
            label='Last Name'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            sx={{ backgroundColor: '#fff', width: 300 }}
            fullWidth
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextareaAutosize
            minRows={10}
            id='message'
            name='message'
            placeholder='Your Message. . .'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 300 }}
          />
          {formik.touched.message && Boolean(formik.errors.message) ? (
            <Typography variant='p' color='red' sx={{ fontSize: '0.8rem' }}>
              {formik.errors.message}
            </Typography>
          ) : (
            ''
          )}

          <Button
            color='primary'
            variant='contained'
            type='submit'
            endIcon={<Send />}
          >
            Send
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Contact;
