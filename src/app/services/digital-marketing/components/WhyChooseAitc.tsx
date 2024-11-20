import { cn } from '@/utils/cn';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const WhyChooseAitc = () => {
  return (
    <div className='bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1300px] flex-col items-center gap-10 xsm:gap-[3.25rem]'>
        <CommonTitle title='Why choose AITC ' className='text-center' />
        <div className='flex flex-col   gap-8'>
          {[1, 2, 3, 4].map((item, index) => (
            <Point key={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAitc;

const Point = ({ index }: { index: number }) => {
  return (
    <div className={cn('flex flex-row  gap-6 ', index % 2 != 0 && 'xmd:pl-28')}>
      <span>
        <svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 8.20868C0 8.43081 0.0880234 8.64384 0.244706 8.8009L7.70291 16.2774C8.02919 16.6045 8.55818 16.6045 8.88446 16.2774L12.5602 12.5927C12.8864 12.2656 12.8864 11.7353 12.5602 11.4082L1.42625 0.246985C0.899927 -0.280628 0 0.0930499 0 0.839208V8.20868Z'
            fill='#484BA0'
          />
          <path
            d='M0 23.1608C0 23.907 0.899945 24.2806 1.42626 23.753L12.5586 12.5929C12.8849 12.2658 12.8849 11.7355 12.5586 11.4084L8.88339 7.7242C8.55713 7.39713 8.02814 7.39712 7.70187 7.72418L0.244725 15.1992C0.088031 15.3562 0 15.5693 0 15.7914V23.1608Z'
            fill='#FF7500'
          />
        </svg>
      </span>
      <div className='flex flex-col gap-4'>
        <CommonHeader title='We are a full-service digital marketing agency' />
        <CommonParargraph text='We are a full-service digital marketing agency' className='xmd:text-base' />
      </div>
    </div>
  );
};
