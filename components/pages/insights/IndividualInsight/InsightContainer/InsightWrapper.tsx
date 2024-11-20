/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type InsightIndividual } from '@/types/insights/insights';
import Editor from '@/components/common/editor/Editor';

import AuthorDetails from './AuthorDetails';
import RelatedInsights from './RelatedInsights';
import RelatedService from './RelatedService';

const InsightWrapper = ({ data }: { data: InsightIndividual }) => {
  return (
    <div className='common-padding flex flex-col gap-14 py-14 sm:py-20 lg:flex-row lg:justify-evenly lg:gap-16 lg:py-24'>
      <div className='w-full xl:w-2/3'>
        <Editor content={JSON.parse(data?.description)} />
      </div>
      <div className='flex w-full flex-col gap-12  xl:w-1/3'>
        <AuthorDetails details={data?.createdBy} />
        <RelatedInsights related={data?.relatedInsight} />
        <RelatedService related={data?.relatedService} />
      </div>
    </div>
  );
};

export default InsightWrapper;
