import { fetchData } from '@/utils/getData';
import { type AboutProjectDTO } from '@/types/ourwork/specificpage/AboutProjectDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const AboutProject = async ({ id }: { id: string }) => {
  const data = await fetchData<AboutProjectDTO>(`/our-work/product/section/two/${id}`);

  return (
    <div
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="common-section common-padding flex flex-col gap-12 bg-lightShad2 md:bg-[url('/images/aboutbg.svg')] 2xxl:bg-[url('/images/aboutbglarge.svg')]"
    >
      <CommonTitle title={data?.title} />
      <div className='flex flex-col gap-10 xl:w-2/3'>
        {data?.content?.map((item, index) => (
          <div className='flex flex-col gap-4' key={index + 1}>
            <CommonHeader title={item?.title} />
            <CommonParargraph text={item?.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutProject;
