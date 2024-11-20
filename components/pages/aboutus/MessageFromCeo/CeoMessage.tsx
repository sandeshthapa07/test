import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';
import { FaQuoteLeft } from 'react-icons/fa';

import CommonParargraph from '@/components/common/CommonParargraph';

const CeoMessage = async ({ message, image, name }: { message: string; image: string; name: string }) => {
  const profile = await getImage(image);

  return (
    <div className='flex w-full flex-col items-center justify-center lg:flex-row'>
      <div className='relative mr-5 h-[420px] w-3/4 self-end sm:mr-0 sm:w-[330px] xmd:self-center lg:w-1/4'>
        <Image
          src={image}
          alt='ceo'
          fill
          sizes='33vw'
          className='rounded-2xl'
          placeholder='blur'
          blurDataURL={profile?.src}
          draggable='false'
        />
      </div>
      <div
        className='-mt-16 flex w-full flex-col gap-8 rounded-2xl p-6 lg:-ml-4 lg:mt-0 lg:w-3/4 lg:pl-20'
        style={{ boxShadow: '0px 0px 14px 0px #EDEDFF' }}
      >
        <div className='flex flex-col gap-2'>
          <span>
            <FaQuoteLeft size={62} className='text-primary' />
          </span>

          <CommonParargraph text={message} className='text-base' />
        </div>

        <div className='designation flex flex-col gap-2'>
          <p className='text-lg font-black capitalize'>{name}</p>
          <span className='text-lg text-primary'>CEO,AITC International</span>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
