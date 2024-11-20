import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements';
import CTA from '../common/CTA';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import TrustedPartners from '../common/TrustedPartners';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import DesignProcess from './components/DesignProcess/DesignProcess';
import DesignServices from './components/DesignServices';
import DigitalEvolution from './components/DigitalEvolution';
import Industry from './components/Industry/Industry';
import ServiceOverview from './components/ServiceOverview';
import WhyAITC from './components/WhyAITC';

const Page = () => {
  return (
    <main>
      <Banner />
      <ServiceOverview />
      <DigitalEvolution />
      <TrustedPartners />
      <DesignServices />
      <TechnologyUsed />
      <Benefits />
      <Industry />
      <WhyAITC />
      <DesignProcess />
      <CTA />
      <RelatedServices />
      <Achievements />
      <TestimonialSection />
      <OurWorkServices />
      <ServicesCTA />
      <FAQ url='/home/faq-section' />
      <ContactSection />
    </main>
  );
};

export default Page;
