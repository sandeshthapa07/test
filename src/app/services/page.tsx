import { Suspense } from 'react';

import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import TechSuite from '@/components/pages/aboutus/TechSuite/TechSuite';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import Page from '@/components/pages/Home/ProductDevelopment/page';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import Banner from '@/components/pages/services/MainPage/Banner';
import CaseStudies from '@/components/pages/services/MainPage/CaseStudies/CaseStudies';
import Benefits from '@/components/pages/services/MainPage/ServiceBenefits/Benefits';
import ServiceDescription from '@/components/pages/services/MainPage/ServiceDescription/ServiceDescription';
import ServiceList from '@/components/pages/services/MainPage/ServiceList/ServiceList';

const ServicePage = () => {
  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <ServiceDescription />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <Benefits />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <ServiceList />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <TechSuite />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <CollaborativePartners />
      </ErrorBoundaryWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
      <CaseStudies />
      <TestimonialSection />
      <ErrorBoundaryWrapper>
        <FAQ url='/home/faq-section' />
      </ErrorBoundaryWrapper>
      <ContactSection />
    </main>
  );
};

export default ServicePage;
