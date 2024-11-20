import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

import ImagesList from './ImagesList';
import JoinReasonList from './JoinReasonList';

const JoinUs = () => {
  return (
    <section className='bg-lightShad2'>
      {/* title and description */}
      <div className='common-padding common-section   max-w-[1454px]'>
        <div className=' flex flex-col items-center justify-between gap-[3.25rem] xl:flex-row 2xl:gap-[7.375rem]  '>
          <TitleParaWrapper className='w-[90%]'>
            <TitleChipWrapper className=' xl:items-start'>
              <CommonChip text='Join Us' />
              <CommonTitle title='Discover why you will love it here' className='text-center xl:text-start' />
            </TitleChipWrapper>
            <CommonParargraph
              text={`Join us to be part of an innovative team that values creativity and diversity. We offer career growth opportunities, flexible work-life balance, comprehensive wellness programs, and recognition for your achievements. Work with the latest technologies and contribute to impactful projects in a supportive environment.`}
              className='text-center xl:text-left'
            />
          </TitleParaWrapper>
          <JoinReasonList />
        </div>
        {/* images section */}
        <ImagesList />
      </div>
    </section>
  );
};

export default JoinUs;
