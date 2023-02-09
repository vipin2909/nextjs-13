import { FC, memo, Fragment } from 'react';
import script from 'next/script';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const BO = dynamic(() => import('@mui/material/Box'));
