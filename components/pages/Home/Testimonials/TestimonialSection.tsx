import CommonTitle from '@/components/common/CommonTitle';

import TestimonialSwiper from './TestimonialSwiper';

const TestimonialSection = () => {
  return (
    <div
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="flex min-h-[80dvh] flex-col items-center justify-center gap-12 bg-[url('/svg/testimonial.svg')] px-6 py-14"
    >
      <p className='rounded-lg bg-lightShade1 px-[6px] py-1 text-mainBlack'>CLIENT TESTIMONIALS</p>
      <CommonTitle title='Hear from experienced ones' />
      <TestimonialSwiper />
    </div>
  );
};

export default TestimonialSection;
