import { type KeyPoint } from '@/types/service';
import CommonParargraph from '@/components/common/CommonParargraph';

const BenefitCard = ({ data, index }: { data: KeyPoint; index: number }) => {
  return (
    <div className='flex flex-col items-start gap-6 lg:flex-row lg:items-center'>
      <div className='rounded-lg  bg-primary p-[11px]'>
        <div className='rounded-lg bg-white p-[7.5px] text-mainBlack'>0{index + 1}</div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-lg font-black'>{data?.keywords}</p>
        <CommonParargraph text={data?.description} className='text-white' />
      </div>
    </div>
  );
};

export default BenefitCard;
