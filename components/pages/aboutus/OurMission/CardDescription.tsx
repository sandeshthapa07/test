import CommonParargraph from '@/components/common/CommonParargraph';

const CardDescription = ({ description, keyHighlight }: { description: string; keyHighlight: string }) => {
  return (
    <div className='card flex flex-col items-center gap-4 rounded-2xl bg-white p-2 py-4 sm:w-[292px]  lg:w-[336px] 2xl:w-[360px]'>
      <h3 className='rounded-lg bg-secondary px-2 py-1.5 font-medium text-white'>“ {keyHighlight} ”</h3>
      <CommonParargraph text={description} className='text-center text-base' />
    </div>
  );
};

export default CardDescription;
