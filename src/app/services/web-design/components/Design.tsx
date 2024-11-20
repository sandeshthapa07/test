import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Design = () => {
  return (
    <div className='bg-lightShad2'>
      <div className='main-common-padding flex flex-col items-center gap-[3.25rem] '>
        <CommonTitle title='Design and digital marketing services' className='text-center' />
        <div className='images'>
          <Image
            src='/deletable/logic.jpeg'
            alt='spotlight'
            width={562}
            height={384}
            sizes='calc(100vw - 2rem)'
            className='size-full rounded-t-2xl object-contain'
          />
        </div>
        <CommonParargraph
          text='Searching for Digital marketing services for your Business too? we love to share that AITC also Provides Digital marketing services for your Business. Try our top-notch digital marketing strategy that helps your business to thrive into internet. '
          className='text-center'
        />
        <CommonButton text='Book a free consultation' href='contactus' className='mx-auto' />
      </div>
    </div>
  );
};

export default Design;
