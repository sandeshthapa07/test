import { fetchData } from '@/utils/getData';

import { type CommonResponse } from '@/types/aboutus/banner';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonTitle from '@/components/common/CommonTitle';

import Description from './Description';

const OurStory = async () => {
  const { title, description, bgImage, sectionTitle } = await fetchData<CommonResponse>(
    '/about-us/our-culture-section'
  );

  return (
    <section className='ourstory common-padding mx-auto flex max-w-[1354px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
      <div className='flex flex-col items-center gap-2'>
        <CommonChip text={sectionTitle} />
        <CommonTitle title={title} className='text-center' />
      </div>
      <Description text={description} image={bgImage} />

      <CommonButton href='/' text='Explore our work' />
    </section>
  );
};

export default OurStory;
