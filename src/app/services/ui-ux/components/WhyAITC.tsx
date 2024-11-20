import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const WhyAITC = () => {
  return (
    <div className='main-common-padding bg-lightShad2'>
      <div className='mx-auto flex max-w-[1350px] flex-col items-center justify-center gap-12 lg:flex-row'>
        <div className='flex flex-col gap-12 lg:w-[70%]'>
          <CommonTitle title='Why choose AITC for UX/UI design' className='text-center lg:text-left' />
          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <CommonButton href='/contact-us' text='Book a free consultation' variant='primary' />
          </div>
        </div>
        <div className='flex flex-wrap gap-8'>
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className='flex flex-col gap-4 md:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[350px]'>
              <CommonHeader title='User centered approach' />
              <CommonParargraph text='We rigorously test our designs with real users to ensure optimal functionality and a seamless experience.' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAITC;
