import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../../utils/theme';
import { Colors } from '@utils/constants';

const styles: {
  [key in 'mainContainer' | 'introContainer' | 'card']: CSSProperties &
    SxProps<typeof theme>;
} = {
  mainContainer: {
    padding: '50px 0',
    color: Colors.vieWhite,
  },
  introContainer: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    padding: '50px 30px',
    width: '280px',
  },
};

export default styles;
