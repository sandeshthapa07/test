import BannerBackground from '../../../common/BannerBackground';
import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const Banner = () => {
  return (
    <BannerBackground image='/deletable/banner1.jpeg'>
      <div className='main-common-padding flex w-full justify-center lg:justify-start'>
        <ServiceCommonBanner
          title='Mobile Application Development'
          description='We build websites for startups and businesses. Our team of experts will design and develop a website that is user-friendly, visually appealing, and optimized for search engines.'
          chip='Mobile Application Development'
          primarybuttonLink='/contact-us'
          primarybuttonText='Get your andriod app'
          className='w-full lg:w-1/2'
        />
      </div>
    </BannerBackground>
  );
};

export default Banner;
