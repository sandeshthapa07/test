import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const OurNeed = () => {
  return (
    <div className='where-you-need-us bg-secondary'>
      <div className='main-common-padding flex w-full max-w-[1500px] flex-col gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title='Here is where you need us' className='text-center text-white' />
        <div className='list flex flex-row flex-wrap justify-center gap-8'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <CommonButton text='Get a free consultation' href='/' className='mx-auto' />
      </div>
    </div>
  );
};

export default OurNeed;

const Card = () => {
  return (
    <div className='card flex max-w-[315px] flex-col items-center  justify-center gap-4 '>
      <div className='flex flex-col gap-2'>
        <hr className='h-2 w-full rounded bg-primary' />
        <span className='text-[1.375rem] font-black text-white '>01</span>
      </div>
      <CommonHeader title='Business Process Automation' className='text-center text-white' />
      <CommonParargraph text='Reduce manual work and increase efficiency' className='text-center text-white' />
    </div>
  );
};
