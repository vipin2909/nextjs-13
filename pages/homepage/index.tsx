import { Fragment } from 'react';
import dynamic from 'next/dynamic';

const Seo = dynamic(() => import('../../components/seo'));
const Landing = dynamic(() => import('../../modules/home/landing'));

const HomePage = () => {
  return (
    <Fragment>
      {/* <Seo />
      <Landing /> */}
    </Fragment>
  );
};

export default HomePage;
