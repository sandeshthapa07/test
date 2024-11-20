import Image from 'next/image';
import { fetchData } from '@/utils/getData';

import { type ValuesSection } from '@/types/Home/keyvalue';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

const KeyValue = async () => {
  const data = await fetchData<ValuesSection>('/home/our-key-value-section');

  return (
    <div className='flex flex-col items-center justify-center gap-14 bg-lightShad2 py-14 xl:py-24'>
      <CommonAnimation>
        <CommonTitle title={data?.title} />
      </CommonAnimation>
      <div className='grid w-[90%] gap-10 lg:grid-cols-2 xl:w-[70%] xl:grid-cols-3 '>
        {data?.keyValue?.map((item) => (
          <div key={item.id} className='flex flex-col gap-6 rounded-2xl bg-white p-4'>
            <div className='flex h-[200px] items-center justify-center'>
              <Image src={item?.imageUrl} alt='keyvalue' width={100} height={100} className='size-32 object-contain' />
            </div>
            <p className='text-center text-lg text-mainBlack'>{item?.name}</p>
            <p className='text-center text-mainBlack'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyValue;
