import Image from 'next/image';

import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

interface DescriptionProps {
  text: string;
  image: string;
}

const Description = ({ text, image }: DescriptionProps) => {
  return (
    <div className='description flex flex-col items-center gap-10 xmd:gap-16 lg:flex-row xl:gap-[4.5rem] '>
      <div className='flex flex-col gap-14'>
        <CommonParargraph text={text} className=' text-white' />
        <CommonButton href='/contact-us' text='Talk with our experts' />
      </div>
      <Image src={image} alt='kho' width={477} height={369} className='w-full xsm:w-[477px]' />
    </div>
  );
};

export default Description;
