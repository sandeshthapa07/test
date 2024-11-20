import getImage from '@/utils/dynamicImageBlur';
import Image from 'next/image';

const Card = async ({ title, icon }: { title: string; icon: string }) => {
  const bgImage = await getImage(icon);
  return (
    <div className='card sm:[292px] lg:[336px] flex w-full flex-col items-center gap-6 rounded-2xl bg-white p-4 2xl:w-[360px]'>
      <div className='relative h-[100px] w-full'>
        <Image
          src={icon}
          fill
          sizes='33vw'
          alt='icon'
          placeholder='blur'
          blurDataURL={bgImage?.src}
          className='rounded-lg object-cover'
        />
      </div>
      <p className='text-lg font-extrabold text-mainBlack'>{title?.charAt(0).toUpperCase() + title?.slice(1)}</p>
    </div>
  );
};

export default Card;
