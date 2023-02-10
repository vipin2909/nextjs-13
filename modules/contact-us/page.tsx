import React from 'react';
import dynamic from 'next/dynamic';
import styles from './styles';
import TextField from '../../components/TextField';

const Box = dynamic(() => import('@mui/material/Box'));
const Typography = dynamic(() => import('@mui/material/Typography'));
const Button = dynamic(() => import('@mui/material/Button'));

const ContactUs = () => {
  return (
    <Box sx={styles.contactContainer}>
      <Typography sx={styles.headingTitle}>CONTACT US</Typography>
      <Box sx={styles.nameEmailContainer}>
        <TextField sx={styles.nameTextField} placeholder="Name" type="text" />
        <TextField sx={styles.emailTextField} placeholder="Email" type="text" />
      </Box>
      <TextField
        sx={styles.messageTextField}
        placeholder="Message"
        type="text"
      />
      <Button sx={styles.buttonContainer} variant="outlined">
        Send Message
      </Button>
    </Box>
  );
};

export default ContactUs;
