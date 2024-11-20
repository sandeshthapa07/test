import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';
import { fetchData } from '@/utils/getData';

import { type CommonResponse } from '@/types/aboutus/banner';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const OurCulture = async () => {
  const { title, description, bgImage, sectionTitle } = await fetchData<CommonResponse>(
    '/about-us/our-culture-section'
  );
  const image = await getImage(bgImage);

  return (
    <section className='ourculture bg-lightShad2 '>
      <div className='common-padding mx-auto flex max-w-[1092px] flex-col items-center justify-end gap-10 pt-[3.75rem] xmd:pt-20 xl:pt-[6.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={title} className='text-center' />
          </div>

          <CommonParargraph text={description} className='text-center' />
        </div>

        <CommonButton text='Join our team' href='/career' />
        <figure className='relative h-[173px] w-full'>
          <Image
            src={bgImage}
            alt='A description of the image'
            fill
            sizes='calc(100vw - 2rem)'
            placeholder='blur'
            blurDataURL={image?.src}
          />
          <figcaption>Caption for the image</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default OurCulture;
