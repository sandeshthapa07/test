import { fetchData } from '@/utils/getData';

import { type CommonResponse } from '@/types/aboutus/banner';
import CommonButton from '@/components/common/CommonButton';

import Description from './Description';

const HowWedoit = async () => {
  const { sectionTitle, title, description, bgImage } = await fetchData<CommonResponse>('/about-us/how-we-do-section');
  return (
    <section className='bg-lightShad2'>
      <div className='common-padding mx-auto flex flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
        <div className='w-full'>
          <Description description={description} image={bgImage} title={title} chipText={sectionTitle} />
        </div>
        <CommonButton text='Explore our services' href='/' />
      </div>
    </section>
  );
};

export default HowWedoit;
