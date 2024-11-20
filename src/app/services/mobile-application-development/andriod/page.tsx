import PageDetail from '../../common/PageDetail';
import Banner from './components/Banner';
import Info from './components/Info';

const Page = () => {
  return (
    <div className='android'>
      <Banner />
      <PageDetail
        title='Andriod app development'
        description={`As a leading android development company, we offer a wide range of android app development services that boost your business forward. Our team of expert developers will create an android app that perfectly aligns with your business goals. Whether you're a seasoned enterprise or a budding startup, we partner with you to understand your specific needs and target audience.`}
        href='/contact-us'
        linkTitle='Get your andriod app'
      />
      <Info />
    </div>
  );
};

export default Page;
