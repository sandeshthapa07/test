import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ServicesCTA = () => {
  return (
    <div
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className='common-padding common-section flex flex-col gap-14 bg-[url("/images/cta_bg.svg")] text-white'
    >
      <div className='flex max-w-[1350px] flex-col gap-8'>
        <CommonTitle title='Ready to get your SEO services?' className='text-center text-white' />
        <CommonParargraph
          text='We design and develop impactful, user-friendly websites that drive business results. From simple brochure sites to complex e-commerce platforms, our experienced team works closely with you to exceed your goals. Schedule a meeting with us to get personalized solutions tailored to your business needs.'
          className='text-center text-white'
        />
      </div>
      <CommonButton href='/contact-us' text='Book a free consultation' />
    </div>
  );
};

export default ServicesCTA;
