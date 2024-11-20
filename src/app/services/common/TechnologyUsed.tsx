import { cn } from '@/utils/cn';
import Image from 'next/image';
import CommonTitle from '@/components/common/CommonTitle';

const TechnologyUsed = ({ className }: { className?: string }) => {
  return (
    <div className={cn(`common-padding common-section`, className)}>
      <CommonTitle className='text-center' title='Technology Used' />
      <div className='scroll-container flex max-w-[1350px] flex-row gap-4 overflow-x-auto p-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
          <div key={item} className='shrink-0'>
            <Image
              src='https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='check'
              width={300}
              height={300}
              className='size-[70px] rounded-2xl object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyUsed;
