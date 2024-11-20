import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection';
import CreativeStove from '@/components/pages/Home/CreativeStove/CreativeStove';
import GlobalImpact from '@/components/pages/ourwork/GlobalImpact/GlobalImpact';
import SuccessStories from '@/components/pages/ourwork/SuccessStories/SuccessStories';

import Banner from '../../../components/pages/ourwork/banner/Banner';

const Page = ({ searchParams }: { searchParams: { tab: number } }) => {
  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <GlobalImpact />
      </ErrorBoundaryWrapper>
      <CreativeStove />
      <ErrorBoundaryWrapper>
        <SuccessStories activeTab={Number(searchParams.tab)} />
      </ErrorBoundaryWrapper>
      <ContactSection />
    </main>
  );
};

export default Page;
