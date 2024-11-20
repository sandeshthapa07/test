import Banner from './components/Banner';
import DigitalMarketing from './components/DigitalMarketing';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import WhyChooseAitc from './components/WhyChooseAitc';

const page = () => {
  return (
    <div className='digitalmarketing'>
      <Banner />
      <DigitalMarketing />
      <SoftwareDevelopment />
      <WhyChooseAitc />
    </div>
  );
};

export default page;
