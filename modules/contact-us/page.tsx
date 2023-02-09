import React from 'react';
import { Box, TextField } from '@mui/material';

import styles from './styles';

const ContactUs = () => {
  return (
    <Box sx={styles.contactContainer}>
      <Box sx={styles.imageContainer}>
        <Box sx={styles.nameEmailContainer}>
          <TextField sx={styles.nameTextField} />
          <TextField sx={styles.emailTextField} />
        </Box>
        <TextField sx={styles.messageTextField} />
      </Box>
    </Box>
  );
};

export default ContactUs;
