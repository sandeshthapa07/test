import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

const JoinOurTeam = () => {
  return (
    <section className='common-padding common-top-bottom-padding  common-section max-w-[1134px]'>
      <TitleParaWrapper>
        <TitleChipWrapper>
          <CommonChip text='Join Our Team' />
          <CommonHeader title='Join Our Team' className='text-center' />
        </TitleChipWrapper>
        <CommonParargraph
          className='text-center'
          text={`Welcome to AITC International, where technology meets innovation. We're not just another IT company; we're your dedicated technology partners, committed to transforming your ideas into reality. Whether you're looking to develop cutting-edge technology solutions, revamp existing systems, or ensure seamless maintenance, AITC International is here to make it happen. `}
        />
      </TitleParaWrapper>
      <CommonButton text='Join os now' href='/' />
    </section>
  );
};

export default JoinOurTeam;
