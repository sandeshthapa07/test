import Image from 'next/image';
import Link from 'next/link';
import { type RelatedInsight } from '@/types/insights/insights';

const RelatedInsights = ({ related }: { related: RelatedInsight[] }) => {
  console.log(related);
  return (
    <div className='flex w-full flex-col gap-6'>
      <p className='text-2xl font-black text-mainBlack'>Related Insights</p>
      <div className='flex w-full flex-col gap-6'>
        {related?.map((item) => (
          <Link
            href={`/insights`}
            key={item?.id}
            className='flex w-full flex-col gap-8 rounded-2xl bg-lightShad2 p-6 md:flex-row'
          >
            <Image
              src={item?.coverImage}
              alt='spotlight'
              width={500}
              height={500}
              className='size-36 rounded-2xl object-cover'
            />
            <div className='flex flex-col gap-4'>
              <div className='flex flex-wrap gap-4 text-secondary'>
                {item?.insightTags?.map((tag) => <p key={tag?.name}>{tag?.name}</p>)}
              </div>
              <p className='text-primary'>{item?.industryTag?.name}</p>
              <hr className='w-full border-lightShade1' />
              <p className='text-lg font-black text-mainBlack'>{item?.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link href={`/insights?category=${related[0]?.industryTag?.id}`} className='font-bold text-primary'>
        See More
      </Link>
    </div>
  );
};

export default RelatedInsights;
