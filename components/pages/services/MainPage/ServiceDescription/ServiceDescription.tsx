import { fetchData } from '@/utils/getData';

import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

type Quote = {
  quote: string;
  id: number;
};

const ServiceDescription = async () => {
  const data = await fetchData<Quote>('/services/quote');

  return (
    <div className='common-section common-padding 2xxl:w-2/3'>
      <CommonParargraph className='text-center' text={`"${data?.quote}" `} />
      <CommonButton href='' text='Learn More' className='mx-auto ' />
    </div>
  );
};

export default ServiceDescription;
