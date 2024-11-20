import Image from 'next/image';
import { cn } from '@/utils/cn';

import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

const Diversity = () => {
  return (
    <section className={cn('common-padding common-section  max-w-[1375px]', ' w-full items-center xl:flex-row')}>
      <TitleParaWrapper className=' z-20 w-[90%] items-start rounded-2xl bg-secondary p-6 xmd:w-3/5 xl:w-1/2 xl:max-w-[585px] '>
        <TitleChipWrapper className='items-start'>
          <CommonChip text='DIVERSITY AND INCLUSION' className='bg-lightShade1' />
          <CommonTitle title='Celebrating every voice' className='text-white' />
        </TitleChipWrapper>
        <CommonParargraph
          className=' text-white'
          text={`At AITC, we believe that a diverse and inclusive workplace is key to innovation and success. We are committed to creating an environment where every team member feels valued and respected, regardless of their background or identity. By bringing together a wide range of perspectives, `}
        />
      </TitleParaWrapper>
      <div className='image relative z-10 -mt-20 h-auto w-full rounded-2xl xl:-ml-40 xl:mt-0 xl:w-1/2'>
        <Image
          src={
            'https://images.unsplash.com/photo-1725203574073-79922f64110a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          width={714}
          height={504}
          sizes='calc(100vw-2rem)'
          alt='image'
          className='w-full rounded-2xl object-cover'
        />
      </div>
    </section>
  );
};

export default Diversity;
