import Image from 'next/image';
import Link from 'next/link';
import { truncateText } from '@/utils/truncate';

import { type InsightTag } from '@/types/insights/insights';

const InsightCard = ({
  title,
  image,
  tags,
  category,
  date,
  slug,
}: {
  title: string;
  image: string;
  tags: InsightTag[];
  category: string;
  date: string;
  slug: string;
}) => {
  return (
    <Link
      href={`/insights/${slug}`}
      className='flex flex-col gap-8 rounded-2xl border border-transparent bg-lightShad2 p-6 transition-all duration-300 hover:border-primary'
    >
      <div className='relative'>
        <Image
          src='/icons/insight_icon.png'
          alt='spotlight'
          width={500}
          height={500}
          className='absolute  right-4 top-4 size-7'
        />
        <Image src={image} alt='spotlight' width={500} height={500} className='size-full rounded-2xl' />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-wrap items-center gap-4'>
          {tags.map((tag) => (
            <p key={tag?.name} className='text-secondary'>
              {tag?.name}
            </p>
          ))}
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-primary'>{category}</p>
          <p className='text-mainBlack'>{date}</p>
        </div>
        <hr className='w-full border border-lightShade1' />
        <p className='text-lg font-bold text-mainBlack lg:h-[70px]'>{truncateText(title)}</p>
      </div>
    </Link>
  );
};

export default InsightCard;
