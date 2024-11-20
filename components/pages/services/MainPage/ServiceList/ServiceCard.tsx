import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { type Service } from '@/types/service';
import CommonParargraph from '@/components/common/CommonParargraph';

const ServiceCard = ({ data }: { data: Service }) => {
  return (
    <Link
      href='/services'
      className='flex flex-col gap-6 rounded-2xl border border-transparent bg-lightShad2 p-6 transition-all duration-300 hover:border-primary'
    >
      <div>
        <Image
          src={data?.bgImage}
          alt=''
          width={100}
          height={100}
          className='size-20 rounded-xl bg-white object-contain'
        />
      </div>
      <div className='flex flex-row items-center gap-4'>
        <p className='whitespace-nowrap text-lg font-black leading-[150%] tracking-[0.36px] text-mainBlack lg:whitespace-normal'>
          {data?.title}
        </p>
        <FaLongArrowAltRight className='text-2xl text-primary' />
      </div>
      <CommonParargraph text={data?.description} />
    </Link>
  );
};

export default ServiceCard;
