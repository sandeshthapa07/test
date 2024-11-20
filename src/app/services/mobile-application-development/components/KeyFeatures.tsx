import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const KeyFeatures = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/svg/keyfeatures.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className=' h-fit w-full'
    >
      <div className='main-common-padding flex max-w-[1400px] flex-col items-center justify-center gap-10 xmd:gap-[3.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title='Key Features' className='text-center' />
          <CommonParargraph
            text={`With AITC International, you get more than just software development services. Our team brings extensive experience and a deep understanding of industry best practices to every project.`}
            className='text-center'
          />
        </div>
        <div className='features flex flex-wrap items-center justify-center gap-8'>
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

export default KeyFeatures;

const Card = () => {
  return (
    <div className='flex w-full flex-row items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#EDEDFF] p-4 xmd:max-w-[286px]'>
      <Arrow />
      <CommonHeader title='Enhanced automation  capabilities automation  capabilities' />
    </div>
  );
};
