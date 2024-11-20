import { FaRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import CommonTitle from '@/components/common/CommonTitle';

const CTA = () => {
  return (
    <div className='common-padding common-section bg-lightShad2'>
      <CommonTitle title='Achieve business goals with our expert SEO services' className='text-center ' />
      <hr className='w-1/4 border-lightShade1' />
      <div className='flex flex-col items-center gap-8 md:flex-row'>
        <Link href='/' className='flex flex-row items-center gap-2 text-lg font-black text-primary'>
          <p>Get in touch</p>
          <FaRightLong />
        </Link>
        <Link href='/' className='flex flex-row items-center gap-2 text-lg font-black text-primary'>
          <p>Book free consultation</p>
          <FaRightLong />
        </Link>
      </div>
    </div>
  );
};

export default CTA;
