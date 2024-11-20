'use client';

import Image from 'next/image';

export const MiddleImage = ({ index }: { index: number }) => {
  console.log(index);
  return (
    <>
      <style jsx>{`
        @media screen and (min-width: 1024px) {
          .images {
            grid-row-start: ${index + 1};
          }
        }
      `}</style>

      <div
        className={`images  col-span-full  row-start-3 flex items-center justify-center xmd:row-start-2 lg:col-span-1   lg:col-start-2 lg:row-span-full  lg:row-start-2 `}
      >
        <Image src={'/deletable/software.png'} alt='arrow' width={192} height={190} className='rounded-lg' />
      </div>
    </>
  );
};
