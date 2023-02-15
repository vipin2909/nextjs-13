import React, { FC } from 'react';
import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './styles';
import { Images } from '@utils/constants';
import Image from 'next/image';
import { Typography } from '@mui/material';

const Box = dynamic(() => import('@mui/material/Box'));
const Button = dynamic(() => import('@mui/material/Button'));
const UpsideAnimationText = dynamic(
  () => import('@components/upsideAnimationText')
);

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
        <Box>About Us</Box>
      </Box>
      <Box>
        <Box sx={styles.card}>
          <Typography
            id="cardHeadText"
            sx={styles.cardHead}
            variant="h6"
            align="left"
          >
            01
          </Typography>
          <Typography variant="h5" align="left">
            Architecture
          </Typography>
          <UpsideAnimationText>
            We provide all equipment and services, etc and ensure a safe and
            secure project site.
          </UpsideAnimationText>

          <Button
            sx={styles.readMore}
            href="https://nextjs.org/docs/api-reference/next/link"
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
