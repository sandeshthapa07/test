import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type InstructionsResponse } from '@/types/ourwork/specificpage/instructionsDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

/**
 * Reflects Steps and options to play in figma design
 */
const Instructions = async ({ id }: { id: string }) => {
  const data = await fetchData<InstructionsResponse>(`/our-work/product/section/nine/${id}`);
  return (
    <div className={cn(`common-section common-padding flex flex-col gap-12`, id && 'bg-lightShad2')}>
      <div className='flex flex-col items-center gap-8 2xxl:w-2/3'>
        <CommonTitle title={data?.title} />
        <CommonParargraph text={data?.description} className='text-center' />
      </div>
      <div className='grid grid-cols-1 gap-8 rounded-3xl bg-secondary p-8 text-white md:grid-cols-2 2xxl:w-2/3'>
        {data?.steps?.map((item, index) => (
          <div key={item?.id} className='flex w-full max-w-[543px] flex-row items-start gap-6'>
            <div className='rounded-md bg-primary p-[11px]'>
              <div className='rounded-md bg-white p-[7.5px] text-mainBlack'>
                <p>{String(index + 1)?.padStart(2, '0')}</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className=' text-lg font-black leading-[150%] tracking-[0.36px]'>{item?.title}</p>
              <CommonParargraph text={item?.description} className='text-white' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
