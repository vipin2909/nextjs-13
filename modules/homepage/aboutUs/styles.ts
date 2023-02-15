import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../../utils/theme';
import { Colors } from '@utils/constants';

const styles: {
  [key in
    | 'mainContainer'
    | 'introContainer'
    | 'card'
    | 'cardHead'
    | 'cardPara'
    | 'readMore']: CSSProperties & SxProps<typeof theme>;
} = {
  mainContainer: {
    padding: '50px 0',
    color: Colors.vieWhite,
    backgroundColor: Colors.vieBackground,
  },
  introContainer: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    padding: '50px 30px',
    width: '280px',
    textAlign: 'left',
  },
  cardHead: {
    fontSize: '60px',
    fontWeight: 700,
    marginBottom: '10px',
    color: 'transparent',
  },
  cardPara: {
    marginTop: '60px',
    // opacity: '0',
    transform: 'translateY(30px)',
    transition: 'all 0.4s',
    color: '#999',
    fontSize: '14px',
    fontWeight: 400,
  },
  readMore: {
    marginTop: '80px',
    color: Colors.orange,
  },
};

export default styles;
