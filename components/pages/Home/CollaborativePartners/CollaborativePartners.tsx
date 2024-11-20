import { fetchData } from '@/utils/getData';

import { type PartnersSection } from '@/types/Home/collaborative-partners';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import { InfiniteMovingCards } from './InfiniteMovingCards';

export const CollaborativePartners = async () => {
  const data = await fetchData<PartnersSection>('/home/partnership-section');

  return (
    <section className='collaborative-partners-main flex w-screen flex-col items-center gap-8 overflow-hidden bg-white px-[48px] py-16 text-black sm:px-[100px] lg:px-[200px] lg:py-[100px]'>
      <CommonTitle title={data?.title} />
      <CommonParargraph text={data?.description} />
      <div className='scrollbar-wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased'>
        <InfiniteMovingCards items={data?.partner} speed='normal' />
      </div>
    </section>
  );
};
