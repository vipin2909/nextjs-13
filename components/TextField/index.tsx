import React, { CSSProperties, FC } from 'react';
import dynamic from 'next/dynamic';

interface TextFieldProps {
  sx: CSSProperties;
  placeholder: string;
  type: string;
}

const TF = dynamic(() => import('@mui/material/TextField'));

const TextField: FC<TextFieldProps> = ({ sx, placeholder, type }) => {
  return (
    <TF
      sx={sx}
      placeholder={placeholder}
      type={type}
      id="outlined-password-input"
    />
  );
};

export default TextField;
