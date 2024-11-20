import SoftwareDevelopment from '../digital-marketing/components/SoftwareDevelopment';
import Banner from './components/Banner';
import KeyFeatures from './components/KeyFeatures';
import WhyChoose from './components/WhyChoose';

const Page = () => {
  return (
    <div className='mobileapplication'>
      <Banner />
      <SoftwareDevelopment />
      <WhyChoose />
      <KeyFeatures />
      {/* <DevelopmentProcess /> */}
      {/* <RelatedService /> */}
    </div>
  );
};

export default Page;
