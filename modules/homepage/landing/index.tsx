import dynamic from 'next/dynamic';
import { FC, Fragment, memo } from 'react';
import ContactUs from '../contact-us';
import Testimonials from '../testimonials';
import Tabs from "../../../components/tabs"

const AboutUs = dynamic(() => import('../aboutUs'));

const Landing: FC<{}> = () => {
  return (
    <Fragment>
      <AboutUs />
      <ContactUs />
      <Testimonials />
      <Tabs />
    </Fragment>
  );
};

export default memo(Landing);
