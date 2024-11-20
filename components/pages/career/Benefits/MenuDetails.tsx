import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

const menuitems = [
  {
    id: 1,
    title: 'TADA Allowance',
    icon: 'https://plus.unsplash.com/premium_vector-1682269804020-ad81c4d120c8?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Investment in your post-grad degree, learning .',
  },
  {
    id: 2,
    title: 'TADA Allowance',
    icon: 'https://plus.unsplash.com/premium_vector-1682269804020-ad81c4d120c8?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Investment in your post-grad degree, learning .',
  },
  {
    id: 3,
    title: 'TADA Allowance',
    icon: 'https://plus.unsplash.com/premium_vector-1682269804020-ad81c4d120c8?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Investment in your post-grad degree, learning .',
  },
  {
    id: 4,
    title: 'TADA Allowance',
    icon: 'https://plus.unsplash.com/premium_vector-1682269804020-ad81c4d120c8?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Investment in your post-grad degree, learning .',
  },
];

const MenuDetails = () => {
  return (
    <div className='grid h-auto w-full grow grid-cols-1 gap-6 rounded-2xl bg-lightShade1 p-6 xmd:grid-cols-2'>
      <AnimatePresence mode='wait'>
        {menuitems?.map((item) => (
          <div className='flex h-fit w-full flex-col gap-6 rounded-lg bg-white p-6' key={item?.id}>
            <div className='flex flex-row items-center  gap-2'>
              <div className='max-h-[54px] max-w-[54px]'>
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  width={54}
                  height={54}
                  sizes='calc(100vw - 70%)'
                  draggable={false}
                />
              </div>
              <CommonHeader title={item?.title} />
            </div>
            <CommonParargraph text={item?.description} className='text-base' />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MenuDetails;
