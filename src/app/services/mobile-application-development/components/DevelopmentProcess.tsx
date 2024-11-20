import { cn } from '@/utils/cn';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const DevelopmentProcess = () => {
  return (
    <div className=' development-process bg-lightShad2'>
      <div className='main-common-padding flex flex-col gap-10 xmd:gap-[3.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title='Development Process' className='text-center' />
          <CommonParargraph
            text={`Looking for software development services? Let us help you to build custom software solutions for your industry and business. We have you covered from consulting to product development to testing to Deployment and maintenance.`}
            className='text-center'
          />
        </div>
        <div className='flex flex-row items-center justify-center gap-10'>
          <div
            className='relative 
          '
          >
            <svg
              width='510'
              height='1141'
              viewBox='0 0 510 1141'
              fill='none'
              className='relative '
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M50.2842 1.46094C50.2842 1.46094 307.372 13.3318 348.784 133.961C402.876 291.522 -24.8379 219.179 2.78419 383.461C32.3289 559.178 399.159 269.015 455.784 437.961C518.015 623.631 -3.19865 457.231 2.78419 652.961C8.95421 854.814 599.272 981.174 496.284 807.461C469.033 761.496 399.5 757.961 380.5 787.461C324.423 874.528 506 915.461 487 1039.18C476.65 1106.57 400.145 1129.92 332.5 1138.46C292.082 1143.56 171.112 1126.46 73.5 1110.62'
                stroke='#C8BEE8'
                strokeWidth='2'
                strokeLinecap='round'
                strokeDasharray='10 9'
              />
            </svg>
            {[1, 2].map((item, index) => (
              <Process key={item} index={index} />
            ))}
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;

const Process = ({ index }: { index: number }) => {
  const css = index % 2 != 0 ? 'right-0' : 'left-0';
  return (
    <div className={`absolute top-0 ${css} flex max-w-[223px] flex-col gap-3`}>
      <div className={cn(' flex flex-row items-center gap-3', index % 2 != 0 ? ' justify-start' : '  justify-end')}>
        <span className='text-[2.5rem] font-black text-primary'>{index + 1}</span>
        <CommonHeader title='Discovery' />
      </div>
      <CommonParargraph
        text={`We begin by understanding your goals, target audience, and project requirements through in-depth discussions.`}
        className={cn(index % 2 != 0 ? 'text-start' : 'text-end')}
      />
    </div>
  );
};
