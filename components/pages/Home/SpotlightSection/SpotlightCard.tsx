import Image from 'next/image';
import Link from 'next/link';
import { FaRightLong } from 'react-icons/fa6';

import { type ProductTag } from '@/types/ourwork/main';

const SpotlightCard = ({
  title,
  image,
  tags,
  link,
}: {
  title: string;
  image: string;
  tags: ProductTag[];
  link: string;
}) => {
  return (
    <Link href={link} className='flex flex-col gap-8 rounded-2xl bg-lightShad2'>
      <Image src={image} alt='spotlight' width={500} height={500} className='size-full rounded-t-2xl object-contain' />
      <div className='flex flex-col gap-6 px-6 pb-6'>
        <div className='flex flex-row items-center gap-2'>
          <p className='text-lg font-bold text-mainBlack'>{title}</p>
          <FaRightLong className='text-lg text-primary' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag?.id}>
              {tag?.name}
              {index < tags.length - 1 && ','}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SpotlightCard;
