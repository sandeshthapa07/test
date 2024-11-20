import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const WhyChoose = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className='why-choose bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1300px] flex-col items-center gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title='Why choose AITC' className='text-center' />
        <CommonParargraph
          text={`We can understand the challenges businesses face in mobile app development. Our agile development methodology combines with expert consulting, development, and continuous support to ensure a seamless mobile app transformation for your business.`}
          className='text-center'
        />
        <div className='grid grid-cols-1  gap-8  xmd:grid-cols-2'>
          {data.map((item, index) => (
            <Card key={item} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

const Card = ({ index }: { index: number }) => {
  return (
    <div
      className={`flex  max-w-[570px] flex-col gap-4 self-center rounded-2xl bg-white p-6 ${index % 2 != 0 ? 'last:col-span-full last:place-self-center ' : ''} `}
    >
      <div className='flex flex-row items-center gap-4'>
        <Arrow />
        <CommonHeader title='Enhanced automation  capabilities' />
      </div>
      <CommonParargraph
        text={`Our model emphasizes applying theoretical knowledge in real-world scenarios through hands-on activities. This approach helps students build practical skills, gain confidence, and better understand how concepts are used in professional settings.`}
      />
    </div>
  );
};
