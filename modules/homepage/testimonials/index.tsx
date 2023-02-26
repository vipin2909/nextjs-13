import Card from '@components/card-component/card';
import { Box, Typography } from '@mui/material';
import Images from '@utils/constants/images';
import styles from './styles';

const Testimonials = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.headingTitle}>Testimonials</Typography>
      <Box sx={styles.cardContainer}>
        <Card
          image={Images.SOCHI_VILLAS}
          name="Card Name"
          designation="Card Designation"
          desc={'This is some description abour card component'}
        />
        <Box></Box>
        <Card
          image={Images.SOCHI_VILLAS}
          name="Card Name"
          designation="Card Designation"
          desc={'This is some description abour card component'}
        />
        <Box></Box>
        <Card
          image={Images.SOCHI_VILLAS}
          name="Card Name"
          designation="Card Designation"
          desc={'This is some description abour card component'}
        />
      </Box>
    </Box>
  );
};

export default Testimonials;
