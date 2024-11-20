import Image from 'next/image';
import Link from 'next/link';

const CreativeStoveCard = ({
  id,
  title,
  description,
  image,
}: {
  id: number;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl bg-white p-4'>
      <Image src={image} alt='spotlight' width={500} height={500} className='size-full rounded-2xl object-contain' />
      <div className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-lightShad2 p-4'>
        <p className='text-lg font-bold text-mainBlack'>{title}</p>
        <p className='text-center text-mainBlack'>{description}</p>
        <Link href={`/portfolio/${id}`} className='text-lg font-bold text-primary'>
          Read case study
        </Link>
      </div>
    </div>
  );
};

export default CreativeStoveCard;
