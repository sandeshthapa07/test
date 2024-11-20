import { cn } from '@/utils/cn';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Link from 'next/link';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const data = [1, 2, 3, 4, 5, 6, 7];

const SoftwareDevelopment = () => {
  return (
    <div className='bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1300px] flex-col items-center gap-10 xsm:gap-[3.25rem] '>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title='Software Development' className='text-center' />
          <CommonParargraph
            text={`Looking for software development services? Let us help you to build custom software solutions for your industry and business. We have you covered from consulting to product development to testing to Deployment and maintenance.`}
            className='text-center'
          />
        </div>
        <div className='grid  grid-cols-1 gap-8 xmd:grid-cols-2'>
          {data?.map((item, index) => <Card key={item} last={data?.length % 2 != 0} index={index} />)}
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;

const Card = ({ last, index }: { last: boolean; index: number }) => {
  return (
    <div
      className={cn(
        `card group relative z-10 flex h-[284px] max-w-[476px] flex-col gap-4 overflow-hidden rounded-2xl bg-white p-6 `,
        last && 'xmd:last:col-span-2  xmd:last:place-self-center'
      )}
    >
      {index == 0 && <Circle color='linear-gradient(180deg, #9A89D4 -32.43%, #4D3B8B 100%)' />}{' '}
      {index == 1 && <Square color='linear-gradient(180deg, #8473BF 0%, #4D3B8B 100%)' />} {index == 2 && <Triangle />}{' '}
      {index == 3 && <Circle color='bg-[#FFC899]' />}{' '}
      {index == 4 && (
        <Square
          color='
                linear-gradient(180deg, #FFBE87 0%, #FF973F 100%)'
        />
      )}{' '}
      {index == 5 && <Triangle color='bg-[#FFC899]' />}
      {index == 6 && <Circle color='bg-[#594797]' />}
      <CommonHeader title='Custom Software Development' className='text-[22px]' />
      <CommonParargraph
        text='We have you covered from consulting to product development to testing to Deployment and maintenance.'
        className='text-base'
      />
      <Link href='#' className='flex flex-row items-center gap-2 text-lg font-black text-primary'>
        Learn more{' '}
        <span>
          <IoArrowForwardOutline size={24} className='text-primary' />
        </span>
      </Link>
    </div>
  );
};

const Circle = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        background: color,
      }}
      className={cn(
        'absolute bottom-[-10%] right-[-22%] size-[178px] rounded-full  bg-[#FFC899] transition-all duration-700 group-hover:bottom-[-30%] group-hover:right-[-1%]',
        color
      )}
    />
  );
};

const Square = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        background: color,
      }}
      className={cn(
        'absolute bottom-[-3%] right-[-33%] size-[167px] rotate-[35deg] rounded-[32px] bg-[#FFC899]  transition-all duration-700 group-hover:bottom-[-30%]  group-hover:right-[5%] group-hover:rotate-[10deg]',
        color
      )}
    />
  );
};

const Triangle = ({ color }: { color?: string }) => {
  const bg =
    color == 'bg-[#FFC899]'
      ? ' linear-gradient(181deg, #7260AE -31.44%, #594797 99.09%)'
      : 'linear-gradient(181deg, #FFE1C8 -31.44%, #FF8F30 99.09%)';
  return (
    <div
      style={{
        background: bg,
      }}
      className={cn(
        'triangle absolute bottom-[8%] right-[-24%] rotate-[-48deg] transition-all duration-700 group-hover:bottom-[-22%] group-hover:right-[-2%] group-hover:rotate-[-99deg] ',
        color
      )}
    />
  );
};
