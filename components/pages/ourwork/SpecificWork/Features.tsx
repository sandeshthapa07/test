import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type KeyFeatures } from '@/types/ourwork/specificpage/keyFeaturesDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

/**
 * Component that renders a section for describing the features of a project.
 *
 * Reflects Ludo game modes in figma design
 *
 * @returns A JSX element representing the Features section of a project detail page.
 */
const Features = async ({ id }: { id: string }) => {
  const data = await fetchData<KeyFeatures>(`/our-work/product/section/three/${id}`);
  return (
    <div className={cn(`common-padding common-section flex flex-col gap-12 bg-white`, id && 'bg-lightShad2')}>
      <CommonTitle title={data?.title} />
      <div className='flex flex-wrap content-center items-center justify-center gap-y-10 2xxl:w-2/3'>
        {data?.keyPoint?.map((item) => (
          <div
            key={item?.id}
            className={`mx-auto flex w-full flex-col gap-6 rounded-lg bg-lightShad2 p-6 md:w-[425px]`}
          >
            <CommonHeader title={item?.title} />
            <CommonParargraph text={item?.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
