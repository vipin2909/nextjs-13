import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('../../modules/contact-us/page'));

const ContactUs = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactUs;
