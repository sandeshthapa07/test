import Image from 'next/image';
import { cn } from '@/utils/cn';

const imges = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1726250947679-3d89963934d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ImagesList = () => {
  const colSpanCalc = (index: number): string => {
    switch (index) {
      case 0:
        return 'col-span-full sm:col-span-4';
      case 1:
        return 'col-span-full sm:col-span-3';
      case 2:
        return 'col-span-full xl:col-span-5';
      case 3:
        return 'col-span-full xl:col-start-3 sm:col-span-4';
      case 4:
        return 'col-span-full sm:col-span-3';
      default:
        return 'hidden';
    }
  };

  return (
    <div className='grid w-full grid-cols-1 place-items-center gap-4 sm:grid-cols-7  xl:grid-cols-12  '>
      {imges?.map((item, index) => (
        <div
          key={item.id}
          className={cn(' relative h-auto  w-full items-center justify-center sm:h-[16.8125rem] ', colSpanCalc(index))}
        >
          <Image
            src={item.url}
            alt=''
            width={416}
            height={357}
            draggable='false'
            sizes='(min-width: 640px) 50vw, (min-width: 1280px) 33vw, 100vw'
            className='size-full rounded-2xl  object-cover'
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
