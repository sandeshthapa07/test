import Image from 'next/image';
import getImage from '@/utils/dynamicImageBlur';

const Card = async ({ url, id }: { url: string; id: number }) => {
  const image = await getImage(url);
  return (
    <li className='flex max-w-[628px] flex-row gap-6 rounded-2xl' key={id}>
      <div className='lg;w-[479px] relative  h-[190px] w-[319px] rounded-2xl  xl:h-[286px] 2xl:h-[375px] 2xl:w-[628px] '>
        <Image
          src={url}
          placeholder='blur'
          blurDataURL={image?.src}
          alt={id?.toString()}
          fill
          className='rounded-2xl object-cover'
        />
      </div>
    </li>
  );
};

export default Card;
