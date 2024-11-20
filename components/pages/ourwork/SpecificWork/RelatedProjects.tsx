import CommonTitle from '@/components/common/CommonTitle';

import SpotlightCard from '../../Home/SpotlightSection/SpotlightCard';

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

const RelatedProjects = () => {
  return (
    <div className='common-section common-padding flex flex-col gap-14'>
      <CommonTitle title='Related projects' className='text-center' />
      <div className='grid  items-center justify-items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
        {data.map((item) => (
          <SpotlightCard
            key={item.id}
            title={item.title}
            image={item.image}
            tags={[]}
            link={`/ourwork/${item.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
