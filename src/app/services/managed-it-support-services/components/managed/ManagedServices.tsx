import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const ManagedServices = () => {
  return (
    <div className='main-common-padding flex flex-col gap-[3.25rem]'>
      <CommonTitle title='Managed IT Support Services' className='text-center' />
      <div className='flex flex-row flex-wrap justify-center gap-8'>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Card key={item} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default ManagedServices;
