import moment from 'moment';
import { type Insight, type PaginationType } from '@/types/insights/insights';
import Pagination from '@/components/common/Pagination';

import InsightCard from '../../Home/InsightSection/InsightCard';

const InsightListing = ({ insights, pagination }: { insights: Insight[]; pagination: PaginationType }) => {
  return (
    <div className='common-section common-padding flex flex-col items-center justify-center gap-14'>
      {insights?.length === 0 ? (
        <div>
          <p className='text-center text-lg text-gray-500'>
            Apologies, but we could not find any information related to this category.
          </p>
        </div>
      ) : (
        <div className='grid items-center justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3 2xxl:w-4/5'>
          {insights.map((item, index) => (
            <InsightCard
              key={index}
              category={item?.industryTag?.name}
              date={moment(item?.industryTag?.createdAt).format('DD MMM YYYY')}
              image='/deletable/rennovation.png'
              tags={[]}
              title={item?.title}
              slug={item?.slug}
            />
          ))}
        </div>
      )}

      <Pagination totalPages={pagination?.total?.page as number} />
    </div>
  );
};

export default InsightListing;
