import { FaRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const data = [
  {
    id: 1,
    title: 'Rennovation Guru',
    tags: ['Architecture', 'Interior', 'Renovation'],
    image: '/deletable/rennovation.png',
  },
  {
    id: 1,
    title: 'Kabel Interiors',
    tags: ['Architecture', 'Interior', 'Renovation'],
    image: '/deletable/rennovation.png',
  },
  {
    id: 1,
    title: 'Eureka Traders',
    tags: ['Architecture', 'Interior', 'Renovation'],
    image: '/deletable/rennovation.png',
  },
];

const OurWorkServices = () => {
  return (
    <div className='common-padding common-section max-w-[1350px]'>
      <CommonTitle title='Our Work on SEO' />
      <CommonParargraph
        text='Discover in-depth insights and innovative discoveries to understand the industry shifts. Our team provides valuable knowledge and expert guidance'
        className='text-center'
      />
      <div className='grid  items-center justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {data.map((item) => (
          <Card key={item.id} title={item.title} image={item.image} tags={item.tags} link={`/ourwork/${item.id}`} />
        ))}
      </div>
      <CommonButton text='Explore More' href='/ourwork?tab=0' />
    </div>
  );
};

const Card = ({ title, image, tags, link }: { title: string; image: string; tags: string[]; link: string }) => {
  return (
    <Link href={link} className='flex flex-col gap-8 rounded-2xl bg-lightShad2'>
      <Image src={image} alt='spotlight' width={500} height={500} className='size-full rounded-t-2xl object-contain' />
      <div className='flex flex-col gap-6 px-6 pb-6'>
        <div className='flex flex-row items-center gap-2'>
          <p className='text-lg font-bold text-mainBlack'>{title}</p>
          <FaRightLong className='text-lg text-primary' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag}>
              {tag}
              {index < tags.length - 1 && ','}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default OurWorkServices;
