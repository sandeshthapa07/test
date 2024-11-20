import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import InsightCard from './InsightCard';

const data = [
  {
    id: 1,
    title: 'Navigating the Future: Blockchain and Finance therefore we tend to exibit...',
    image: '/deletable/rennovation.png',
    tags: ['Finance', 'Blockchain'],
    category: 'Blockchain',
    date: '12 Aug 2022',
  },
  {
    id: 2,
    title: 'Navigating the Future',
    image: '/deletable/rennovation.png',
    tags: ['Finance', 'Blockchain'],
    category: 'Blockchain',
    date: '12 Aug 2022',
  },
  {
    id: 3,
    title: 'Navigating the Future: Blockchain and Finance therefore we tend to exibit...',
    image: '/deletable/rennovation.png',
    tags: ['Finance', 'Blockchain'],
    category: 'Blockchain',
    date: '12 Aug 2022',
  },
];

const InsightSection = () => {
  return (
    <CommonAnimation className='flex min-h-screen flex-col items-center justify-center  gap-12 px-6 py-14'>
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <CommonTitle title='Unlock our insights and discoveries' />
        <CommonParargraph
          text='Discover in-depth insights and innovative discoveries to understand the industry shifts. Our team provides valuable knowledge and expert guidance'
          className='xl:w-[90%]'
        />
      </div>
      <div className='grid items-center justify-items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
        {data.map((item) => (
          <InsightCard
            key={item.id}
            category={item.category}
            date={item.date}
            image={item.image}
            tags={[]}
            title={item.title}
            slug={item.title}
          />
        ))}
      </div>
      <CommonButton text='Read more insights' href='/portfolio' />
    </CommonAnimation>
  );
};

export default InsightSection;
