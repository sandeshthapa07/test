'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = ({ menulist }: { menulist: { id: number; title: string; url: string }[] }) => {
  const searchParams = useSearchParams();
  const selectedMenu = searchParams.get('devTab');

  return (
    <ul className='menu flex max-w-[99%] flex-row justify-start gap-4 overflow-x-auto'>
      <AnimatePresence>
        {menulist.map((menu) => (
          <li key={menu.id} className='relative w-fit'>
            <AnimatePresence>
              {selectedMenu == menu.url && (
                <motion.span
                  className='absolute inset-0 block size-full rounded-2xl bg-lightSecondary '
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.6, delay: 0.4 },
                  }}
                />
              )}
            </AnimatePresence>
            <Link
              href={`?devTab=${menu?.url}`}
              scroll={false}
              className={cn('z-10 flex w-full flex-row items-center gap-4  rounded-lg  px-4 py-[0.4375rem]')}
            >
              <span className='relative size-9 rounded-full'>
                <Image
                  src={`https://images.unsplash.com/photo-1633410189542-36d96e3762b8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={menu?.title}
                  fill
                  draggable='false'
                  sizes='10vw'
                  className='rounded-full'
                />
              </span>
              <h4 className='z-20 whitespace-nowrap text-lg font-medium text-white'>{menu.title}</h4>
            </Link>
          </li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Menu;
