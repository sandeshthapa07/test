import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import International from './components/internationalservice/International';
import ManagedServices from './components/managed/ManagedServices';
import National from './components/national/National';

// managed-it-support-services
const Page = () => {
  return (
    <div>
      <National />
      <International />
      <ManagedServices />
      <ErrorBoundaryWrapper>
        <FAQ url='/home/faq-section' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
