import React from 'react';

import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import IndustrySegmentsSwiper from './IndustrySegmentsSwiper';

const IndustrySegments = () => {
  return (
    <div className='industry-segments-main flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-14 xl:py-24'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <CommonTitle title='Industry segments we operate in' />
        <CommonParargraph text='"Our Industry Sectors" encompasses the diverse areas where a business operates. Highlighting its scope and industry versatility.' />
      </div>
      <IndustrySegmentsSwiper />
    </div>
  );
};

export default IndustrySegments;
