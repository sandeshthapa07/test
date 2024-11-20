import { fetchData } from '@/utils/getData';
import { FaApple } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { type PlatformDTO } from '@/types/ourwork/specificpage/PlatformDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Platforms = async ({ id }: { id: string }) => {
  const data = await fetchData<PlatformDTO>(`/our-work/product/section/ten/${id}`);
  return (
    <div className='common-padding mx-auto flex flex-col items-center justify-center gap-14 py-16 sm:py-20 lg:flex-row xl:py-24 2xxl:w-2/3'>
      <Image
        src={data?.bgImage}
        alt='platforms'
        width={445}
        height={570}
        className='h-[570px] w-[445px] rounded-3xl object-cover'
      />
      <div className='flex flex-col gap-14'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title} className='text-center lg:text-left' />
          <CommonParargraph text={data?.description} className='text-center lg:text-left' />
        </div>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row lg:justify-start'>
          <Link
            href={data?.uploadLink?.playStoreLink}
            className='flex flex-row items-center gap-2 rounded-md bg-mainBlack px-4 py-3 text-white'
          >
            <Image src='/icons/playstore.svg' alt='playstore' width={30} height={30} />
            <div className='flex flex-col'>
              <p className='text-xs  font-medium leading-[150%] tracking-[0.24px] text-white'>Download on</p>
              <p className='text-lg  font-medium leading-[150%] tracking-[0.36px] text-white'>Play Store</p>
            </div>
          </Link>
          <Link
            href={data?.uploadLink?.iosLink}
            className='flex flex-row items-center gap-2 rounded-md bg-mainBlack px-4 py-3 text-white'
          >
            <FaApple className='text-3xl text-white' />
            <div className='flex flex-col'>
              <p className='text-xs  font-medium leading-[150%] tracking-[0.24px] text-white'>Download on</p>
              <p className='text-lg  font-medium leading-[150%] tracking-[0.36px] text-white'>App Store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
