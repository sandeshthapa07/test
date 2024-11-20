import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const WhyNeed = () => {
  return (
    <div className='bg-lightShad2'>
      <div className='main-common-padding flex flex-col gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title='Why do you need us?' className='text-center' />
        <div className='flex flex-row flex-wrap justify-center gap-8'>
          {[1, 2, 3].map((item, index) => (
            <Card key={item} index={index + 1} />
          ))}
        </div>
        <CommonButton text='Contact us' href='/' className='mx-auto' />
      </div>
    </div>
  );
};

export default WhyNeed;

const Card = ({ index }: { index: number }) => {
  return (
    <div className='flex w-full flex-col gap-6 rounded-2xl bg-white p-6 sm:max-w-[340px] '>
      <div className='flex flex-row items-center gap-4'>
        <p
          className='w-fit rounded-lg bg-primary p-4'
          style={{
            boxShadow: ' 3px 0px 4px 0px rgba(255, 117, 0, 0.22)',
          }}
        >
          {' '}
          <span className='rounded bg-white px-[0.4375rem] py-[0.3125rem]'>{String(index + 1)?.padStart(2, '0')}</span>
        </p>
        <CommonHeader title='Business Process Automation' />
      </div>
      <CommonParargraph text=' Establishing a professional online presence from the outset is crucial. AITC can create a stunning, user-friendly website that serves as the cornerstone of your brand, attracting and engaging potential customers right from the start.' />
    </div>
  );
};
