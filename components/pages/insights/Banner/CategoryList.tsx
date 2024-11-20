'use client';

import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';

const CategoryList = ({ id, name }: { id: string; name: string }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';
  const router = useRouter();
  return (
    <button
      onClick={() => {
        const optional = new URLSearchParams(searchParams?.toString());
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
        id === 'all' ? optional.delete('category') : optional.set('category', id === 'all' ? '' : id.toString());
        const optionalString = optional.toString();
        router.replace(`/insights${optionalString?.length ? `?` : ''}${optional.toString()}`, {
          scroll: false,
        });
      }}
      className={cn(
        `w-fit rounded-lg bg-white px-4 py-3 transition-all  duration-300`,
        (category || 'all') === id.toString()
          ? 'border border-primary text-mainBlack'
          : 'border border-transparent text-grey'
      )}
    >
      <p className='whitespace-nowrap text-base'>{name}</p>
    </button>
  );
};

export default CategoryList;
