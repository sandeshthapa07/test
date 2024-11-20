import { cn } from '@/utils/cn';
import { Suspense } from 'react';
import { type IndustryTags, type InsightHero } from '@/types/insights/insights';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import CategoryList from './CategoryList';
import SearchInput from './SearchInput';

const Banner = ({ hero, industryTags }: { hero: InsightHero; industryTags: IndustryTags[] }) => {
  return (
    <div className='common-section common-padding relative flex flex-col items-center justify-center'>
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${hero?.bgImage})`,
        }}
        className={cn(`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35`)}
      ></div>
      <div className='relative z-10 flex flex-col items-center justify-center gap-14'>
        <div className='flex flex-col items-center justify-center gap-8 px-4 2xxl:w-2/3'>
          <CommonTitle title={hero?.title} className='text-center' />
          <CommonParargraph text={hero?.description} className='text-center' />
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row 2xxl:w-2/3'>
          <div className='flex w-full flex-col items-start gap-2 px-6 lg:w-1/4 lg:px-1'>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchInput />
            </Suspense>
          </div>
          <div className='hide-scrollbar flex w-screen items-center justify-start gap-6 overflow-x-scroll px-6 max-lg:content-center lg:w-[867px] lg:flex-wrap lg:justify-start lg:px-1'>
            {[{ id: 'all', name: 'All' }, ...industryTags]?.map((item) => (
              <Suspense fallback={<div>Loading...</div>} key={item?.id}>
                <CategoryList id={item?.id as string} name={item?.name} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
