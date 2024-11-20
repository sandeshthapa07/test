import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';
import { fetchData } from '@/utils/getData';

import { type OurCoreValuesResponse } from '@/types/aboutus/ourcorevalue';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const Corevalues = async () => {
  const {
    sectionTitle,
    mainTitle,
    description,
    features,
    bgImage: image,
  } = await fetchData<OurCoreValuesResponse>('/about-us/core-values-section');

  const bgImage = await getImage(image);

  return (
    <section>
      <div className='relative z-[-1] h-[676px] w-full'>
        <Image src={image} alt='spotlight' fill sizes='100vw' placeholder='blur' blurDataURL={bgImage?.src} />
      </div>
      <div className='common-padding z-10 mx-auto mt-[-17%] flex w-4/5 max-w-[1354px] flex-col items-center gap-10 rounded-[2rem] bg-gradient-to-b from-lightShade1 via-white to-white py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={mainTitle} className='text-center' />
          </div>
          <CommonParargraph text={description} className='text-center' />
        </div>

        <div className='cardwrapeer grid grid-cols-1 gap-10 xmd:grid-cols-2 xl:grid-cols-3 '>
          {features?.map((item) => (
            <Card key={item?.id} title={item?.title} description={item?.description} icon={item?.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corevalues;
