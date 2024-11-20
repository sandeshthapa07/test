import { fetchData } from '@/utils/getData';

import { type MemberResponse } from '@/types/aboutus/member';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const WhoWeAre = async () => {
  const { sectionTitle, description, mainTitle, members } = await fetchData<MemberResponse>(
    '/about-us/aitc-members-section'
  );

  return (
    <section className='common-padding mx-auto flex max-w-[1354px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem] '>
      <div className='flex flex-col gap-8 '>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} className='text-center' />
        </div>
        <CommonParargraph text={description} className='text-center' />
      </div>
      <div className='cardwrapeer grid w-full grid-cols-1 gap-10 xsm:grid-cols-2 xl:grid-cols-3 '>
        {members?.map((item) => (
          <Card
            key={item?.id}
            name={item?.name}
            profile={item?.image}
            designation={item?.designation}
            link={item?.link}
          />
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
