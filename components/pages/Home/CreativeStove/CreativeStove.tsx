import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import CreativeStoveCard from './CreativeStoveCard';

const data = [
  {
    id: 1,
    title: 'VMS(Visitor management system)',
    desccription:
      'Welcome to Kabel Interiors, where we turn spaces into art. We craft inspired interior designs with style and spohistication, bringing your vision to life',
    image: '/deletable/rennovation.png',
  },
  {
    id: 1,
    title: 'Eureka Traders',
    desccription:
      'Welcome to Kabel Interiors, where we turn spaces into art. We craft inspired interior designs with style and spohistication, bringing your vision to life',
    image: '/deletable/rennovation.png',
  },
  {
    id: 1,
    title: 'Annapurna Galleries',
    desccription:
      'Welcome to Kabel Interiors, where we turn spaces into art. We craft inspired interior designs with style and spohistication, bringing your vision to life',
    image: '/deletable/rennovation.png',
  },
];

const CreativeStove = () => {
  return (
    <CommonAnimation className='flex min-h-screen flex-col items-center justify-center  gap-12 bg-lightShad2 px-6 py-14'>
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <CommonTitle title="See what's on our creative stove" />
        <CommonParargraph
          text='Discover in-depth insights and innovative discoveries to understand the industry shifts. Our team provides valuable knowledge and expert guidance'
          className='xl:w-[90%]'
        />
      </div>
      <div className='grid place-items-center items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
        {data.map((item) => (
          <CreativeStoveCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.desccription}
            image={item.image}
          />
        ))}
      </div>
      <CommonButton text='Explore More' href='/portfolio' />
    </CommonAnimation>
  );
};

export default CreativeStove;
