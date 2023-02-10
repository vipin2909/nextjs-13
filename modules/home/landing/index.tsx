import Link from 'next/link';
import dynamic from 'next/dynamic';

const ContactPage = dynamic(() => import('../../../pages/contact'));
const Landing = () => {
  return (
    <>
      <div>This is new Landing page</div>
      <Link href={'../../../contact'}>Contact Us Page</Link>
      <ContactPage />
    </>
  );
};

export default Landing;
