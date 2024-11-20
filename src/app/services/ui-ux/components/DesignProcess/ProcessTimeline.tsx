import { cn } from '@/utils/cn';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

const ProcessTimeline = () => {
  const cards = [
    { number: 1, className: 'md:row-span-2' },
    { number: 2, className: 'md:col-start-2 md:row-span-2 md:row-start-2' },
    { number: 3, className: 'md:col-start-3 md:row-span-2 md:row-start-4' },
    { number: 4, className: 'md:col-start-2 md:row-span-2 md:row-start-6' },
    { number: 5, className: 'md:row-span-2 md:row-start-7' },
  ];

  return (
    <div className='mt-10 grid grid-cols-1 gap-14 md:grid-cols-3 md:grid-rows-8'>
      {cards.map(({ number, className }) => (
        <Card key={number} number={number} className={className} />
      ))}
    </div>
  );
};

const Card = ({ className, number }: { className?: string; number: number }) => {
  return (
    <div className={cn(className, 'relative ')}>
      <div className='absolute -right-4 -top-12 -z-10'>
        <p
          style={{
            color: number % 2 !== 0 ? '#FF7500' : '#594797',
          }}
          className='text-8xl font-black'
        >
          {number}
        </p>
      </div>
      <div className='flex flex-col gap-6 rounded-2xl p-6 backdrop-blur-sm [background:rgba(237,237,255,0.60)]'>
        <CommonHeader title='Discovery and Research' />
        <CommonParargraph text="We research deeply to understand your target audience, their needs, and your software's goals." />
      </div>
    </div>
  );
};

export default ProcessTimeline;
