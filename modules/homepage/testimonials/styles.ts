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
  mainContainer: {},
  headingTitle: {},
  cardContainer: {},
  cardImage: {},
  cardDesc: {},
};

export default styles;
