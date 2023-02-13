// import dynamic from 'next/dynamic';
import styles from "./styles";
import { Card, Typography, Box } from "@mui/material";

const Testimonials = () => {
  return (
    <Box>
      <Typography sx={styles.headingTitle}>Testimonials</Typography>
      <Card></Card>
    </Box>
  );
};

export default Testimonials;
