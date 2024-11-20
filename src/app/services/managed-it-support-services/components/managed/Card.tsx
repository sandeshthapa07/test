'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

const shapecss = [
  {
    index: 1,
    css: 'absolute -right-[16%] top-[5%] h-[250px] w-[171px] rotate-[-155deg] rounded-2xl transition-all duration-700   group-hover:right-[-38%] group-hover:top-[-5%] group-hover:rotate-[-174deg] ',
  },
  {
    index: 2,
    css: 'absolute size-[177px] rounded-full  transform translate-x-[80%] translate-y-[80%] transition-transform duration-[1200ms] group-hover:translate-x-[-80%] group-hover:translate-y-[-80%]',
  },
  {
    index: 3,
    css: 'absolute size-[177px] rounded-[35px] bottom-[-17%] left-1/3 rotate-[-16deg] transition-all duration-700 group-hover:bottom-[-40%]  group-hover:rotate-[-40deg] -translate-x-1/3 ',
  },
  {
    index: 4,
    css: ` absolute right-[7%] z-[1] top-[-6%] h-[250px] w-[171px] rotate-[-130deg] rounded-2xl transition-all duration-700 bg-[#868380] group-hover:right-[-38%] group-hover:top-[-8%] group-hover:rotate-[-200deg] `,
  },
];

const Card = ({ index }: { index: number }) => {
  const absolutepositon = shapecss?.find((item) => item?.index == index);

  return (
    <div
      className={cn(
        'group relative  flex h-[371px] w-[329px] flex-col items-center justify-center  overflow-hidden rounded-2xl bg-[#FF8F30] p-6',
        index % 2 == 0 ? 'bg-[#FF8F30] ' : 'bg-[#4D3B8B]'
      )}
    >
      <Shape color={`${index % 2 == 0 ? 'bg-[#FF9F4E] ' : 'bg-[#574597]'} ${absolutepositon?.css}`} />
      {index == 4 && <Shape2 />}
      <h2
        className={
          'z-20 text-[1.375rem] font-black text-white opacity-100 transition-opacity duration-700 group-hover:opacity-0'
        }
      >
        Software development
      </h2>
      <div className=' absolute inset-0 flex flex-col gap-6 p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100'>
        <p className='z-10 w-full text-white '>
          Get your software idea on the right track with our software consulting services. We provide guidance to
          understand your business goals, identify challenges, and define clear software requirements. Well analyze the
          technical and financial viability of your project, and create a detailed roadmap outlining the development
          process, timeline, and resource allocation.
        </p>
        <Link href='#' className='z-20 w-fit text-start text-lg font-black text-white '>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Card;

const Shape = ({ color }: { color: string }) => {
  return <span className={color} />;
};

const Shape2 = () => {
  return (
    <span
      className={cn(
        `absolute right-[-1%] top-[28%] h-[250px] w-[171px] rotate-[-130deg] rounded-2xl bg-[#FF9F4E] transition-all duration-700 group-hover:right-[35%] group-hover:top-[60%]  group-hover:rotate-[-75deg] 
          `
      )}
    />
  );
};
