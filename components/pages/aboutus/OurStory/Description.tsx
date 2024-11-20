import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';

import CommonParargraph from '@/components/common/CommonParargraph';

const Description = async ({ text, image }: { text: string; image: string }) => {
  const bgImage = await getImage(image);
  return (
    <div className='flex w-full flex-col items-center justify-center gap-10 xl:flex-row  xl:items-start '>
      <CommonParargraph text={text} className='w-full text-center xl:w-1/2 xl:text-start' />
      <div className='xl:[351px] relative h-[324px] w-full xl:w-1/2 '>
        <Image
          src={image}
          fill
          sizes='calc(100vw-2rem)'
          alt='kho'
          className='rounded-2xl'
          draggable='false'
          placeholder='blur'
          blurDataURL={bgImage?.src}
        />
      </div>
    </div>
  );
};

export default Description;
