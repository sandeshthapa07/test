import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

const Banner = () => {
  return (
    <div className='common-padding relative flex  h-[641px] flex-col items-center justify-center  bg-lightShad2'>
      <Image2 />
      <Image3 />

      <div className='relative flex w-full max-w-[1240px]  flex-col items-center justify-center gap-10'>
        <Image1 />
        <div className='flex flex-col items-center justify-center px-6'>
          <p className='text-center text-lg font-black capitalize leading-[150%] tracking-[0.36px] text-primary xl:text-left'>
            Digital marketing services
          </p>
          <div className='relative'>
            <h1
              className={
                ' w-full px-10 text-center text-2xl font-black leading-[2.5rem_!important] text-mainBlack  xmd:text-[2.5rem]  lg:text-5xl lg:leading-[3.78rem_!important]  '
              }
            >
              Amplify Your Brands Reach with AITC
            </h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <CommonParargraph
            text={`Engage your customers with immersive experiences with AITC International's AR/VR Solutions.`}
            className='text-center'
          />
          <CommonButton href='contactus' text='Contact Us' className='w-fit' />
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Image1 = () => {
  return (
    <div className='absolute left-0 top-[10%]  flex items-center justify-center'>
      <Image
        src='https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='digital marketing'
        width={136}
        height={129}
        className='rounded-2xl object-cover'
      />
    </div>
  );
};
const Image2 = () => {
  return (
    <div className='absolute bottom-0 left-[58%] flex items-center justify-center'>
      <Image
        src='/deletable/banner1.jpeg'
        alt='digital marketing'
        width={163}
        height={166}
        className='rounded-2xl object-cover'
      />
    </div>
  );
};
const Image3 = () => {
  return (
    <div className='absolute right-[10%] top-[10%] flex items-center justify-center'>
      <Image
        src='/deletable/banner3.jpeg'
        alt='digital marketing'
        width={193}
        height={169}
        className='rounded-2xl object-cover'
      />
    </div>
  );
};
