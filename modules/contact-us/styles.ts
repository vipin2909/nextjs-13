import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../utils/theme';
import Images from "../utils"

const styles: {
  [key in
    | 'contactContainer'
    | 'imageContainer'
    | 'nameEmailContainer'
    | 'nameTextField'
    | 'emailTextField'
    | 'messageTextField']: CSSProperties & SxProps<typeof theme>;
} = {
  contactContainer: {
    backgroundColor: 'red',
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    backgroundImage: "url()",

  },
  nameEmailContainer: {},
  nameTextField: {},
  emailTextField: {},
  messageTextField: {},
};

export default styles;
