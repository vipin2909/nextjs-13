import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'framer-motion';

import { Typography } from '@mui/material';

const Box = dynamic(() => import('@mui/material/Box'));

function UpsideAnimationText({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log('Element', isInView);
  }, [isInView]);

  const styles = {
    animateText: {
      '& p': {
        display: 'block',
        transform: 'translateX(-100px)',
        opacity: '0',
      },
    },
  };
  return (
    <Box ref={ref} sx={styles.animateText}>
      <Typography
        component="p"
        align="left"
        sx={{
          color: '#999',
          transform: isInView ? 'none' : 'translateY(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default UpsideAnimationText;
