import { Suspense } from 'react';

import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import BarrierSection from '@/components/pages/Home/BarriersSection/BarrierSection';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import CompanyStatistics from '@/components/pages/Home/CompanyStatistics/CompanyStatistics';
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';
import CreativeStove from '@/components/pages/Home/CreativeStove/CreativeStove';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import Hero from '@/components/pages/Home/HeroSection/Hero';
import IndustrySegments from '@/components/pages/Home/IndustrySegments/IndustrySegments';
import InsightSection from '@/components/pages/Home/InsightSection/InsightSection';
import KeyValue from '@/components/pages/Home/KeyValueSection/KeyValue';
import Page from '@/components/pages/Home/ProductDevelopment/page';
import Services from '@/components/pages/Home/Services/Services';
import SpotlightSection from '@/components/pages/Home/SpotlightSection/SpotlightSection';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import VideoSection from '@/components/pages/Home/VideoSection/VideoSection';

export default function Home() {
  return (
    <div className='homepage'>
      <Hero />
      <ErrorBoundaryWrapper>
        <CollaborativePartners />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <VideoSection />
      </ErrorBoundaryWrapper>
      <Services />
      <ErrorBoundaryWrapper>
        <KeyValue />
      </ErrorBoundaryWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
      <IndustrySegments />
      <BarrierSection />
      <SpotlightSection />
      <CreativeStove />
      <CompanyStatistics />
      <InsightSection />
      <TestimonialSection />
      <ErrorBoundaryWrapper>
        <FAQ url='/home/faq-section' />
      </ErrorBoundaryWrapper>
      <ContactSection />
    </div>
  );
}
