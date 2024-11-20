import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type FeaturesDTO } from '@/types/ourwork/specificpage/FeaturesDTO';
import CommonTitle from '@/components/common/CommonTitle';

const FeaturesExplored = async ({ id }: { id: string }) => {
  const data = await fetchData<FeaturesDTO>(`/our-work/product/section/four/${id}`);
  return (
    <div className={cn(`common-padding common-section flex flex-col gap-12`, id && 'bg-lightShad2')}>
      <CommonTitle title={data?.title} />
      <div className='flex flex-wrap gap-10 2xxl:w-2/3'>
        {data?.endpoint?.map((item) => (
          <div
            key={item?.id}
            className='mx-auto flex w-[300px] flex-row items-center gap-4 rounded-lg p-4 [background:linear-gradient(90deg,#FFF_6%,#EDEDFF_79%)]'
          >
            <Image
              src={`/icons/arrow.png`}
              alt='features'
              width={100}
              height={100}
              className='h-6 w-4 object-contain'
            />
            <p className='text-lg text-mainBlack'>{item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesExplored;
