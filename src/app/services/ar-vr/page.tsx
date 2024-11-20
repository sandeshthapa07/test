import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Introduction from '../common/Introduction';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TrustedPartners from '../common/TrustedPartners';
import Banner from '../digital-marketing/components/Banner';
import WhyChooseAitc from '../digital-marketing/components/WhyChooseAitc';
import AugmentedReality from './components/AugmentedReality/AugmentedReality';
import ExperienceVR from './components/ExperienceVR';
import ModelingAndDesign from './components/ModelingAndDesign';
import VRDevelopment from './components/VRDevelopment';

const ARVRPage = () => {
  return (
    <main>
      <Banner />
      {/* remaining */}
      <AugmentedReality />
      <AugmentedReality className='bg-lightShad2' />

      <TrustedPartners />
      <Introduction
        title={'What is search engine optimization'}
        description={
          'In todays digital world, mobile apps are essential for connecting with audiences and streamlining operations. At AITC, we provide custom solutions tailored to your needs, enhancing customer engagement and improving efficiency. Whether you are a startup or an established enterprise, we are here to support your growth and innovation.'
        }
        image={
          'https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        className='bg-lightShad2'
      />
      <VRDevelopment
        title={'VR software development'}
        description={
          'Virtual Reality (VR) software development involves creating applications that immerse users in entirely computer-generated environments. By leveraging VR headsets and controllers, users can interact with 3D virtual worlds, experiencing a level of immersion and interactivity that transcends traditional media. This transformative technology has applications across various industries, offering new ways to engage, educate, and entertain.'
        }
        image={
          'https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <ModelingAndDesign />
      <ExperienceVR />
      <WhyChooseAitc />
      <ServicesCTA />
      <RelatedServices />
      <TestimonialSection />
      <ErrorBoundaryWrapper>
        <FAQ url='/home/faq-section' />
      </ErrorBoundaryWrapper>
      {/* <Achievements /> */}
      <ContactSection />
    </main>
  );
};

export default ARVRPage;
