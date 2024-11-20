import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';

import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Description = async ({
  image,
  title,
  chipText,
  description,
}: {
  image: string;
  title: string;
  description: string;
  chipText: string;
}) => {
  const bgImage = await getImage(image);
  return (
    <div className='mx-auto flex size-full max-w-[1200px] flex-col items-center justify-center lg:flex-row'>
      <div className='description z-10 flex w-[94%] flex-col gap-8 rounded-3xl bg-secondary p-6 xl:w-1/2'>
        <div className='flex flex-col gap-2'>
          <CommonChip text={chipText} className='bg-lightShade1' />
          <CommonTitle title={title} className='text-white' />
        </div>
        <CommonParargraph text={description} className='text-white' />
      </div>
      <div className='relative -mt-12 h-[357px] w-full rounded-2xl xl:-ml-40 xl:mt-0 xl:w-1/2 '>
        <Image
          src={image}
          fill
          sizes='calc(100vw-2rem)'
          alt='image'
          className='rounded-2xl'
          placeholder='blur'
          blurDataURL={bgImage?.src}
        />
      </div>
    </div>
  );
};

export default Description;
