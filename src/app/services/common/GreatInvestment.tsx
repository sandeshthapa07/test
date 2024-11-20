import { cn } from '@/utils/cn';
import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const GreatInvestment = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'main-common-padding')}>
      <div className='mx-auto flex max-w-[1354px] flex-col justify-center gap-12 lg:flex-row'>
        <div className='flex flex-col items-center gap-12 lg:max-w-[570px] lg:items-start'>
          <CommonTitle title='Why SEO is a great investment?' className='text-center lg:text-left' />
          <Image
            src='https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='why-seo'
            width={500}
            height={500}
            className='max-h-[350px] rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-8 lg:max-w-[580px]'>
          <CommonParargraph text='Virtual Reality (VR) software development involves creating applications that immerse users in entirely computer-generated environments. By leveraging VR headsets and controllers, users can interact with 3D virtual worlds, experiencing a level of immersion and interactivity that transcends traditional media. This transformative technology has applications across various industries, offering new ways to engage, educate, and entertain.' />
          {[1, 2, 3].map((item) => (
            <div key={item} className='flex flex-col gap-2'>
              <div className='flex flex-row gap-4'>
                <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                <p className='text-lg font-black leading-[150%] tracking-[0.36px]'>Room Scale VAR</p>
              </div>
              <CommonParargraph text='Allows users to move around a physical space, with their movements tracked and mirrored in the virtual environment. This provides a highly immersive experience.' />
            </div>
          ))}
          <div className='flex items-center justify-center lg:items-start lg:justify-start'>
            <CommonButton href='/contact-us' text='Book a free consultation' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatInvestment;
