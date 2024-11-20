import { cn } from '@/utils/cn';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const RelatedServices = () => {
  return (
    <div className='common-padding common-section'>
      <CommonTitle title='Other Related Services' className='text-center' />
      <CommonParargraph
        text='Looking for software development services? Let us help you to build custom software solutions for your industry and business.
        We have you covered from consulting to product development to testing to Deployment and maintenance.'
        className='max-w-[1350px] text-center'
      />
      <div className={cn(`flex max-w-[1150px] flex-wrap content-center items-center justify-center gap-10`)}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className='mx-auto flex h-[132px] w-full flex-col items-center justify-center gap-4 rounded-2xl p-6 [background:linear-gradient(180deg,#EDEDFF_44%,#FFF_100%)] md:w-[330px]'
          >
            <p className='text-lg font-black text-mainBlack'>Software consulting</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
