'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const [showSearch, setShowSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      const optional = new URLSearchParams(searchParams?.toString());

      if (showSearch.trim()) {
        optional.set('search', showSearch);
      } else {
        optional.delete('search');
      }

      const optionalString = optional.toString();
      router.replace(`/insights${optionalString?.length ? `?` : ''}${optionalString}`, {
        scroll: false,
      });
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [showSearch, searchParams, router]);

  return (
    <div className='relative w-full'>
      <input
        id='search'
        type='text'
        value={showSearch}
        onChange={(e) => setShowSearch(e.target.value)}
        placeholder='Search here...'
        className='w-full rounded border border-gray-300 py-2 pl-10 pr-4  focus:outline-none focus:ring-2 focus:ring-primary'
      />
      <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={18} />
    </div>
  );
};

export default SearchInput;
