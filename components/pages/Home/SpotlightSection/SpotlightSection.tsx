import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import SpotlightCard from './SpotlightCard';

const data = [
  {
    id: 1,
    title: 'Rennovation Guru',
    tags: ['Architecture', 'Interior', 'Renovation'],
    image: '/deletable/rennovation.png',
  },
  {
    id: 1,
    title: 'Kabel Interiors',
    tags: ['Architecture', 'Interior', 'Renovation'],
    image: '/deletable/rennovation.png',
  },
  {
    id: 1,
    title: 'Eureka Traders',
    tags: ['Architecture', 'Interior', 'Renovation'],
    image: '/deletable/rennovation.png',
  },
];

const SpotlightSection = () => {
  return (
    <CommonAnimation className='flex min-h-screen flex-col items-center justify-center  gap-12 px-6 py-14'>
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <CommonTitle title='Spotlight on our work' />
        <CommonParargraph
          text='Discover in-depth insights and innovative discoveries to understand the industry shifts. Our team provides valuable knowledge and expert guidance'
          className='xl:w-[90%]'
        />
      </div>
      <div className='grid  items-center justify-items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
        {data.map((item) => (
          <SpotlightCard key={item.id} title={item.title} image={item.image} tags={[]} link={`/ourwork/${item.id}`} />
        ))}
      </div>
      <CommonButton text='Explore More' href='/ourwork?tab=0' />
    </CommonAnimation>
  );
};

export default SpotlightSection;
