import { fetchData } from '@/utils/getData';

import { type Service, type ServiceHeader } from '@/types/service';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import ServiceCard from './ServiceCard';

const ServiceList = async () => {
  const data = await fetchData<Service[]>('/services/list-of-service');
  const header = await fetchData<ServiceHeader>('/services/our-service');

  return (
    <div className='common-padding common-section max-w-[1550px]'>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-2 '>
          <CommonChip text={header?.sectionTitle} />
          <CommonTitle title={header?.mainTitle} className='text-center' />
        </div>
        <CommonParargraph text={header?.description} />
      </div>
      <div className='grid grid-cols-1 gap-8 xmd:grid-cols-2 xl:grid-cols-3 2xxl:w-[85%]'>
        {data?.map((item) => <ServiceCard key={item?.id} data={item} />)}
      </div>
    </div>
  );
};

export default ServiceList;
