import { fetchData, fetchPaginationData } from '@/utils/getData';
import { type IndustryTags, type InsightHero, type InsightsResponse } from '@/types/insights/insights';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import Banner from '@/components/pages/insights/Banner/Banner';
import ExpertGuidance from '@/components/pages/insights/ExpertGuidance/ExpertGuidance';
import InsightListing from '@/components/pages/insights/Listing/InsightListing';

const Page = async ({
  searchParams,
}: {
  searchParams: { search: string; category: string; page: number; limit: number };
}) => {
  const activePage = searchParams.page || 1;

  const { search, category } = searchParams;
  const hero = await fetchData<InsightHero>('/insight/hero-section');
  const industryTags = await fetchData<IndustryTags[]>('/insight/industry-tag');
  const insights = await fetchPaginationData<InsightsResponse>(
    `/insight?page=${activePage}&limit=${9}${search ? `&q=${search}` : ''}${category ? `&industries=${category}` : ''}`
  );

  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner hero={hero} industryTags={industryTags} />
      </ErrorBoundaryWrapper>
      <InsightListing insights={insights?.data} pagination={insights?.pagination} />
      <ExpertGuidance />
    </main>
  );
};

export default Page;
