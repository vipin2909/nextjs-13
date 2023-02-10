import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('../../modules/testimonials'));

const TestimonialsPage = () => {
  return (
    <>
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;
