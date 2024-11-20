import { fetchData } from '@/utils/getData';

import { type InsightIndividual } from '@/types/insights/insights';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import ExpertGuidance from '@/components/pages/insights/ExpertGuidance/ExpertGuidance';
import Banner from '@/components/pages/insights/IndividualInsight/Banner/Banner';
import InsightWrapper from '@/components/pages/insights/IndividualInsight/InsightContainer/InsightWrapper';

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchData<InsightIndividual>(`/insight/${params.slug}`);

  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner title={data?.title} coverImage={data?.coverImage} />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <InsightWrapper data={data} />
      </ErrorBoundaryWrapper>
      <ExpertGuidance />
    </main>
  );
};

export default Page;
