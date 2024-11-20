import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const DesignServices = () => {
  return (
    <div className='design-services common-padding   bg-lightShad2'>
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title='Our UX/UI design services' className='text-center' />
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className='flex flex-col gap-6 rounded-2xl bg-white p-6 lg:odd:ml-36  lg:even:mr-36 '>
            <p className='text-center text-lg font-black leading-[150%] tracking-[0.36px] text-secondary md:text-left'>
              User research and analysis
            </p>
            <div
              className={`flex flex-col gap-6 rounded-2xl bg-white ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className='flex flex-row md:w-1/2'>
                <Image
                  src='https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='spotlight'
                  width={500}
                  height={545}
                  className='max-h-[545px] w-full rounded-2xl object-cover'
                />
              </div>
              <div className='flex flex-col gap-4 md:w-1/2'>
                <CommonParargraph text='Understanding your users is the cornerstone of effective design. At AITC, we employ a range of research methods, including user interviews, surveys, and usability testing, to gather in-depth insights into your target audience. We analyze user behavior, preferences, and pain points to ensure that every design decision is data-driven and aligned with user needs. This comprehensive understanding allows us to create products that resonate deeply with your audience, resulting in higher engagement and satisfaction.' />
                <div className='flex flex-col gap-2 rounded-lg bg-lightShad2 p-4'>
                  <CommonHeader
                    title='UX/UI design'
                    className=' text-lg font-black leading-[150%] tracking-[0.36px] text-mainBlack'
                  />
                  <CommonParargraph text='Reviewing existing content to identify redundancies and gaps.' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignServices;
