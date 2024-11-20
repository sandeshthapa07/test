import BannerBackground from '../../common/BannerBackground';
import ServiceCommonBanner from '../../common/ServiceCommonBanner';

const Page = () => {
  return (
    <div>
      <BannerBackground image='/deletable/banner1.jpeg'>
        <ServiceCommonBanner
          isColumn
          title='Local SEO'
          description='We build websites for startups and businesses. Our team of experts will design and develop a website that is user-friendly, visually appealing, and optimized for search engines.'
          chip='Local SEO'
          primarybuttonLink='/contact-us'
          primarybuttonText='Get your andriod app'
          secondarybuttonLink='/contact-us'
          secondarybuttonText='Get a quote'
          isSecondaryButton
          className='  h-[628px] max-w-[984px]'
        />
      </BannerBackground>
    </div>
  );
};

export default Page;
