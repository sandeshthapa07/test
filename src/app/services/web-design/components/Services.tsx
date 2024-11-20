import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const Services = () => {
  return (
    <div className='services main-common-padding flex max-w-[1200px] flex-col justify-center gap-10 xmd:gap-[3.25rem] lg:flex-row'>
      <div className='flex w-full flex-col gap-8 lg:w-1/2'>
        <CommonTitle title='Web development services we offer' />
        <CommonParargraph text='Every business needs a strong online presence to survive. AITC International offers a comprehensive suite of web development services to help businesses of all sizes, from startups to established companies, build websites that deliver results.' />
      </div>
      <div className='flex w-full flex-col gap-8 lg:w-1/2'>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Points key={item} className={index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} />
        ))}
      </div>
    </div>
  );
};

export default Services;

const Points = ({ className }: { className: string }) => {
  return <CommonHeader title='Content management system (CMS)' className={`rounded-lg p-4 text-white ${className}`} />;
};
