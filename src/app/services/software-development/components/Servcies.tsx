import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

import { MiddleImage } from './MainImage';

const Servcies = () => {
  const data = [1, 2, 3, 4];

  return (
    <div className='softwaredevelopment common-section common-padding  justify-center'>
      <CommonTitle title={`What’s new in our software development service`} className='text-center' />
      <div className='list grid grid-cols-1 gap-[3.25rem] xmd:grid-cols-2 lg:grid-cols-3'>
        {data.map((item) => (
          <Card key={item} />
        ))}

        <MiddleImage index={Math.ceil(data?.length / 2)} />
      </div>
    </div>
  );
};

export default Servcies;

const Card = () => {
  return (
    <div className='flex  max-w-[349px] flex-col gap-6'>
      <div className='flex flex-row items-center gap-4'>
        <div>
          <Image src={'/deletable/software.png'} alt='arrow' width={64} height={64} />
        </div>
        <CommonHeader title='Enhanced automation  capabilities' />
      </div>
      <CommonParargraph
        text={`We have expanded our automation services to streamline more business processes than ever before. Our new automation tools can now handle complex workflows, reducing the need for manual intervention and increasing operational efficiency.`}
      />
    </div>
  );
};
