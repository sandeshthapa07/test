import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';

import CommonParargraph from '@/components/common/CommonParargraph';

const Card = async ({ title, icon, description }: { title: string; icon: string; description: string }) => {
  const bgImage = await getImage(icon);
  return (
    <div className='card flex w-full flex-col gap-6 rounded-2xl bg-lightShad2 p-6 '>
      <div>
        <Image src={icon} alt='spotlight' width={64} height={64} placeholder='blur' blurDataURL={bgImage?.src} />
      </div>
      <h4 className='text-lg font-black text-mainBlack'>{title}</h4>
      <CommonParargraph text={description} className='text-base' />
    </div>
  );
};

export default Card;
