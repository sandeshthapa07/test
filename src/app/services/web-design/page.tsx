import Banner from './components/Banner';
import Design from './components/Design';
import DevelopmentProcess from './components/DevelopmentProcess';
import Help from './components/Help';
import Services from './components/Services';
import WebDevelopment from './components/WebDevelopment';
import WhyNeed from './components/WhyNeed';

const Page = () => {
  return (
    <div>
      <Banner />
      <Help />
      <WebDevelopment />
      <Services />
      <Design />
      <WhyNeed />
      <DevelopmentProcess />
    </div>
  );
};

export default Page;
