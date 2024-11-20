import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';

import CommonParargraph from '@/components/common/CommonParargraph';

const Card = async ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  const bgImage = await getImage(icon);
  return (
    <div className='card flex w-full flex-col items-center gap-6 rounded-2xl bg-gradient-to-b from-[#F2F2FF] to-transparent  p-6'>
      <div className='relative size-16'>
        <Image src={icon} placeholder='blur' blurDataURL={bgImage?.src} fill sizes='33vw' alt={title} />
      </div>
      <h4 className='text-center text-lg font-black text-mainBlack'>{title}</h4>
      <CommonParargraph text={description} className='text-center text-base' />
    </div>
  );
};

export default Card;
