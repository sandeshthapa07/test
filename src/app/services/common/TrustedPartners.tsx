import { fetchData } from '@/utils/getData';

import { type PartnersSection } from '@/types/Home/collaborative-partners';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import { InfiniteMovingCards } from '@/components/pages/Home/CollaborativePartners/InfiniteMovingCards';

const TrustedPartners = async () => {
  const data = await fetchData<PartnersSection>('/home/partnership-section');
  return (
    <section className='collaborative-partners-main flex w-screen flex-col items-center gap-8 overflow-hidden bg-white px-[48px] py-16 text-black sm:px-[100px] lg:px-[200px] lg:py-[100px]'>
      <CommonTitle title={'Trusted by industry leaders'} />
      <CommonParargraph
        text={
          'At AITC International, we view our clients as valued partners. Through collaboration, we tailor our solutions to their specific needs and aspirations.'
        }
      />
      <div className='scrollbar-wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased'>
        <InfiniteMovingCards items={data?.partner} speed='fast' />
      </div>
    </section>
  );
};

export default TrustedPartners;
