import { FaArrowRight } from 'react-icons/fa';
import CommonTitle from '@/components/common/CommonTitle';

const Info = () => {
  return (
    <div className='bg-lightShad2'>
      <div className='info main-common-padding flex max-w-[1000px] flex-col items-center gap-8'>
        <CommonTitle title='We don’t just develop apps, we build solutions' className='text-center' />
        <span className='h-[2px] w-full max-w-[390px] rounded-2xl bg-[#ECECFF]' />
        <div className='flex flex-col items-center gap-8 xmd:flex-row'>
          <button className='group flex flex-row items-center gap-2  text-lg font-black text-primary'>
            Get in touch{' '}
            <span className='transition-all duration-300 group-hover:translate-x-2'>
              <FaArrowRight size={24} />
            </span>
          </button>
          <button className='group flex flex-row items-center gap-2 text-lg font-black text-primary'>
            Book a free consultation{' '}
            <span className='transition-all duration-300 group-hover:translate-x-2'>
              <FaArrowRight size={24} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
