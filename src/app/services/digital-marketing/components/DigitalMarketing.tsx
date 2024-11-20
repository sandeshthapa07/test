import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const DigitalMarketing = () => {
  return (
    <div className='main-common-padding flex max-w-[1000px] flex-col items-center gap-10 xsm:gap-[3.25rem] '>
      <CommonTitle title='Digital marketing with AITC International' className='text-center' />
      <div>
        <Image src='/deletable/Subtract.png' width={628} height={366} alt='digital' />
      </div>
      <CommonParargraph
        text={`AITC International is Nepal's no.1 digital marketing agency. We provide comprehensive digital marketing services designed to help you reach your target audience, build brand awareness, and drive results.
We don't believe in one-size-fits-all solutions. Instead, our team of digital marketing experts works closely with you to develop a customized strategy that aligns with your unique business goals, target audience, and industry landscape. Whether you're aiming to increase brand awareness, generate qualified leads, or boost your online revenue, our data-driven approach ensures that every tactic we employ is strategically designed to maximize your return on investment.`}
        className='text-center'
      />
      <CommonButton text='Get a free quote' href='contactus' className='mx-auto' />
    </div>
  );
};

export default DigitalMarketing;
