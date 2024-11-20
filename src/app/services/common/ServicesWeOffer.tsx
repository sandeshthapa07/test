import { cn } from '@/utils/cn';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ServicesWeOffer = ({ url, className }: { className?: string; url: string }) => {
  console.log(url);
  return (
    <div className={cn(className)}>
      <div
        className={cn(`main-common-padding  flex flex-col justify-center gap-12 xl:flex-row 2xl:w-4/5 2xxl:w-[70%]`)}
      >
        <div className='flex flex-col gap-8 '>
          <CommonTitle title='SEO services we offer' />
          <CommonParargraph text='Every business needs a strong online presence to survive. AITC International offers a comprehensive suite of web development services to help businesses of all sizes, from startups to established companies, build websites that deliver results.' />
        </div>
        <div className='flex flex-col gap-8 xl:min-w-[530px]'>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <p
              style={{
                backgroundColor: index % 2 === 0 ? '#ff8f30' : '#4d3b8b',
              }}
              className='w-full rounded-2xl p-4 text-lg font-black leading-[150%] tracking-[0.36px] text-white'
              key={item}
            >
              Content Management System
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;
