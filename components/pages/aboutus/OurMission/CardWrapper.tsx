import { type Feature } from '@/types/aboutus/banner';

import Card from './Card';
import CardDescription from './CardDescription';

const CardWrapper = ({ features }: { features: Feature[] }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8'>
      {features?.map((feature) => (
        <div className='flex flex-col items-center gap-[18px]' key={feature?.id}>
          <Card title={feature?.title} icon={feature?.icon} />
          <span>
            <svg width='12' height='68' viewBox='0 0 12 68' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7 1.75391C7 1.20162 6.55228 0.753906 6 0.753906C5.44772 0.753906 5 1.20162 5 1.75391L7 1.75391ZM6 67.5274L11.7735 61.7539L6 55.9804L0.226495 61.7539L6 67.5274ZM5 6.75391C5 7.30619 5.44771 7.75391 6 7.75391C6.55228 7.75391 7 7.30619 7 6.75391L5 6.75391ZM7 16.7539C7 16.2016 6.55228 15.7539 6 15.7539C5.44771 15.7539 5 16.2016 5 16.7539L7 16.7539ZM5 26.7539C5 27.3062 5.44771 27.7539 6 27.7539C6.55228 27.7539 7 27.3062 7 26.7539L5 26.7539ZM7 36.7539C7 36.2016 6.55228 35.7539 6 35.7539C5.44771 35.7539 5 36.2016 5 36.7539L7 36.7539ZM5 46.7539C5 47.3062 5.44771 47.7539 6 47.7539C6.55228 47.7539 7 47.3062 7 46.7539L5 46.7539ZM7 56.7539C7 56.2016 6.55228 55.7539 6 55.7539C5.44771 55.7539 5 56.2016 5 56.7539L7 56.7539ZM5 1.75391L5 6.75391L7 6.75391L7 1.75391L5 1.75391ZM5 16.7539L5 26.7539L7 26.7539L7 16.7539L5 16.7539ZM5 36.7539L5 46.7539L7 46.7539L7 36.7539L5 36.7539ZM5 56.7539L5 61.7539L7 61.7539L7 56.7539L5 56.7539Z'
                fill='#FF7500'
              />
            </svg>
          </span>
          <CardDescription description={feature.description} keyHighlight={feature.keyHighlight} />
        </div>
      ))}
    </div>
  );
};

export default CardWrapper;
