import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('../../modules/homepage/testimonials'));

const TestimonialsPage = () => {
  return (
    <>
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;
