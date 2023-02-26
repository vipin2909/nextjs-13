import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../../utils/theme';

const styles: {
  [key in
    | 'mainContainer'
    | 'headingTitle'
    | 'cardContainer'
    | 'cardImage'
    | 'cardDesc']: CSSProperties & SxProps<typeof theme>;
} = {
  mainContainer: {
    marginTop: '60px',
    width: '140%',
    marginLeft: '20%',
  },
  headingTitle: {
    fontSize: '70px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: '80px',
    color: 'white',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 0.4fr 1fr 0.4fr 1fr',
    gap: '1rem',
    alignItems: 'flexStart',
    animationDelay: '0.5s',
    animationName: 'fadeInUp',
  },
};

export default styles;
