import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

import Description from './Description';

const ExpertGuidance = () => {
  return (
    <section className='aitc-intro mx-auto flex flex-col items-center justify-center gap-10 bg-secondary px-6 py-[3.75rem]  xmd:gap-[3.25rem] xmd:px-16 xmd:py-20 xl:p-[6.25rem]'>
      <CommonAnimation>
        <div className='flex flex-col items-center gap-2'>
          <CommonTitle title='Unlock Expert Guidance' className='text-center text-white' />
        </div>
      </CommonAnimation>

      <CommonAnimation className='flex flex-col gap-14 2xxl:w-2/3'>
        <Description
          text='Need expert IT advice? Our seasoned professionals are here to help you navigate your tech challenges. Sechedule a session with us and get personalized solutions tailored to your business needs.'
          image='https://images.unsplash.com/photo-1676906242973-739577556387?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </CommonAnimation>
    </section>
  );
};

export default ExpertGuidance;
