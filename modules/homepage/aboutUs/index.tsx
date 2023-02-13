import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import styles from './styles';
import { Images } from '@utils/constants';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from 'next/link';

const Box = dynamic(() => import('@mui/material/Box'));

const AboutUs: FC<{}> = () => {
  return (
    <Box component="section" sx={styles.mainContainer}>
      <Box sx={styles.introContainer}>
        <Image
          src={`/${Images.ABOUT_US_BG}`}
          alt="about us"
          width={420}
          height={420}
        />
        <Box>AboutUs</Box>
      </Box>
      <Box>
        <Box sx={styles.card}>
          <Typography variant="h6" align="left">
            01
          </Typography>
          <Typography variant="h5" align="left">
            Architecture
          </Typography>
          <Typography component="p" align="left">
            We provide all equipment and services, etc and ensure a safe and
            secure project site.
          </Typography>
          <Link href="https://nextjs.org/docs/api-reference/next/link">
            Read More
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
