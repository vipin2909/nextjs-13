import dynamic from 'next/dynamic';
import { FC, Fragment, memo } from 'react';
import ContactUs from '../contact-us';
import Testimonials from '../testimonials';

const AboutUs = dynamic(() => import('../aboutUs'));

const Landing: FC<{}> = () => {
  return (
    <Fragment>
      <AboutUs />
      <ContactUs />
      <Testimonials />
    </Fragment>
  );
};

export default memo(Landing);
