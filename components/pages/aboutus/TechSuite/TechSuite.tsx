import { fetchData } from '@/utils/getData';

import { type TechSuiteResponse } from '@/types/aboutus/techsuite';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Menu from './Menu';

const TechSuite = async () => {
  const { mainTitle, sectionTitle, stacks, description } =
    await fetchData<TechSuiteResponse>('/about-us/tech-stack-section');

  return (
    <section className='tech-suite bg-lightShad2'>
      <div className='common-padding mx-auto flex max-w-screen-lg flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem] '>
        <div className='flex flex-col gap-8 xmd:px-10'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={mainTitle} className='text-center' />
          </div>
          <CommonParargraph text={description} className='text-center' />
        </div>
        <Menu menu={stacks} />
      </div>
    </section>
  );
};

export default TechSuite;
