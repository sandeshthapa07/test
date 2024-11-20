'use client';

import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';

const Categories = ({ id, name }: { id: string; name: string }) => {
  const searchParams = useSearchParams();
  const tab = useSearchParams().get('tab') || '';
  const router = useRouter();
  return (
    <button
      onClick={() => {
        const optional = new URLSearchParams(searchParams?.toString());
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
        id === 'All' ? optional.delete('tab') : optional.set('tab', id === 'All' ? '' : id.toString());
        const optionalString = optional.toString();
        router.replace(`/ourwork${optionalString?.length ? `?` : ''}${optional.toString()}`, {
          scroll: false,
        });
      }}
      className={cn(
        `w-fit rounded-lg bg-white px-4 py-3 transition-all  duration-300`,
        (tab || 'All') === id.toString()
          ? 'border border-primary text-mainBlack'
          : 'border border-transparent text-grey'
      )}
    >
      <p className='whitespace-nowrap text-base'>{name}</p>
    </button>
  );
};

export default Categories;
