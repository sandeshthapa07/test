import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type SolutionsDTO } from '@/types/ourwork/specificpage/SolutionsDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const Solutions = async ({ id }: { id: string }) => {
  const data = await fetchData<SolutionsDTO>(`/our-work/product/section/six/${id}`);
  return (
    <div className={cn(`common-padding common-section flex flex-col gap-12 bg-white`, id && 'bg-lightShad2')}>
      <CommonTitle title={data?.title} />
      <div className='flex flex-wrap content-center items-center justify-center gap-y-10 2xxl:w-[70%]'>
        {data?.keyPoint?.map((item) => (
          <div
            key={item?.id}
            className={`mx-auto flex w-full flex-col gap-6 rounded-lg bg-lightShad2 p-6 md:w-[570px]`}
          >
            <div className='flex flex-row items-center gap-4'>
              <Image
                src={`/icons/arrow.png`}
                alt='features'
                width={100}
                height={100}
                className='h-6 w-3 object-contain'
              />
              <CommonHeader title={item?.title} />
            </div>
            <CommonParargraph text={item?.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
