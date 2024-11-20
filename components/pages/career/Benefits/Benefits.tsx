import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

import Menu from './Menu';

const Benefits = () => {
  return (
    <section className='bg-lightShad2'>
      <div className='common-padding common-section max-w-[1120px] '>
        <TitleParaWrapper>
          <TitleChipWrapper>
            <CommonChip text='our Benefits' />
            <CommonTitle title='Perks of joining AITC' className='text-center' />
          </TitleChipWrapper>
          <CommonParargraph
            text={`Experience unique benefits designed to support your growth, well-being, and success.`}
          />
        </TitleParaWrapper>

        <Menu />
      </div>
    </section>
  );
};

export default Benefits;
