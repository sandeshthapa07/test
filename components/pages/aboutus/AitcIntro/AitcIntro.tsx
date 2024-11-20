import { fetchData } from '@/utils/getData';

import { type WhoWeAreResponse } from '@/types/aboutus/banner';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Description from './Description';

const AitcIntro = async () => {
  const introData = await fetchData<WhoWeAreResponse>('/about-us/who-we-are-section');
  return (
    <section className='aitc-intro mx-auto flex max-w-[1330px] flex-col items-center justify-center gap-10 px-6 py-[3.75rem] xmd:gap-[3.25rem] xmd:px-16 xmd:py-20 xl:p-[6.25rem]'>
      <CommonAnimation>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={introData.sectionTitle} />
          <CommonTitle title={introData?.mainTitle} className='text-center' />
        </div>
      </CommonAnimation>

      <CommonAnimation>
        <Description text={introData?.description} image={introData?.bgImage} />
      </CommonAnimation>

      <CommonAnimation>
        <CommonParargraph
          className='text-center text-lg '
          text={`“ ${introData?.quote.charAt(0)?.toUpperCase() + introData?.quote?.slice(1)} ”`}
        />
      </CommonAnimation>
    </section>
  );
};

export default AitcIntro;
