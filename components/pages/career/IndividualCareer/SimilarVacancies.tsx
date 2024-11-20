import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

import CommonTitle from '@/components/common/CommonTitle';

const SimilarVacancies = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-4 lg:gap-12  lg:p-24'>
      <CommonTitle title='Explore Similar Vacancies' />
      <div className='flex w-full flex-wrap justify-center gap-8 xl:max-w-[60%]'>
        {[1, 2, 3, 4].map((item) => (
          <Link href={`/career`} key={item} className='flex min-w-[300px] flex-col gap-4 rounded-lg bg-lightShad2 p-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-lg font-black capitalize text-mainBlack'>Senior front end developer</p>
              <FaLongArrowAltRight className='text-xl text-primary' />
            </div>
            <p className='capitalize text-mainBlack'>Radhe Radhe Bhaktapur</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarVacancies;
