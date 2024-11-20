import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements';
import CTA from '../common/CTA';
import GreatInvestment from '../common/GreatInvestment';
import Introduction from '../common/Introduction';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import SEOBanner from '../common/SEOBanner';
import ServicesCTA from '../common/ServicesCTA';
import ServicesWeOffer from '../common/ServicesWeOffer';
import TechnologyUsed from '../common/TechnologyUsed';
import TrustedPartners from '../common/TrustedPartners';
import SEOProcess from './components/SEOProcess/SEOProcess';

const ServicePage = () => {
  return (
    <main>
      <SEOBanner
        image='https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subtitle='Search engine optimization service'
        title='Looking for SEO service?'
        description='Boost your SEO traffic 4x faster with less effort at 10x greater scale than traditional approaches with our proven Seo strategies.'
        buttonText='Get your SEO proposal'
      />
      <Introduction
        title={'What is search engine optimization'}
        description={
          'In todays digital world, mobile apps are essential for connecting with audiences and streamlining operations. At AITC, we provide custom solutions tailored to your needs, enhancing customer engagement and improving efficiency. Whether you are a startup or an established enterprise, we are here to support your growth and innovation.'
        }
        image={
          'https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <ServicesWeOffer className='bg-lightShad2' url='' />
      <SEOProcess steps />
      <CTA />
      <TrustedPartners />
      <GreatInvestment className='bg-lightShad2' />
      <TechnologyUsed />
      <Achievements />
      <RelatedServices />
      <OurWorkServices />
      <ServicesCTA />
      <TestimonialSection />
      <ErrorBoundaryWrapper>
        <FAQ url='/home/faq-section' />
      </ErrorBoundaryWrapper>
      <ContactSection />
    </main>
  );
};

export default ServicePage;
