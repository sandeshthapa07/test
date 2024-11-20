import { fetchData } from '@/utils/getData';
import Image from 'next/image';

interface ImageResponse {
  id: string;
  position: number;
  url: string;
}

const WorkImage = async ({ id, position }: { id: string; position?: number }) => {
  const data = await fetchData<ImageResponse>(`/our-work/product/section/${position == 7 ? 'seven' : 'eight'}/${id}`);

  return (
    <Image src={data?.url} alt={data?.id} width={1920} height={1080} className={`w-full object-cover xl:h-[38rem]`} />
  );
};

export default WorkImage;
