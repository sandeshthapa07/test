import { fetchData, fetchPaginationData } from '@/utils/getData';
import { type ProductResponse, type ProductSection, type ServiceTags } from '@/types/ourwork/main';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import SpotlightCard from '../../Home/SpotlightSection/SpotlightCard';
import Categories from './Categories';

type SuccessStoriesProps = {
  activeTab: number;
  initialLimit?: number;
};

const SuccessStories = async ({ activeTab, initialLimit = 15 }: SuccessStoriesProps) => {
  const data = await fetchData<ProductSection>('/our-work/our-product-section');
  const tagData = await fetchData<ServiceTags[]>('/our-work/product/tag/list');

  const productData = await fetchPaginationData<ProductResponse>(
    `/our-work/product/list${activeTab ? `&serviceTagId=${activeTab}` : ''}`
  );

  return (
    <div className='flex flex-col items-center justify-center gap-12 self-stretch px-6 py-[60px] [background:#FFF] lg:px-[150px] lg:py-[100px]'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <CommonChip text={data.sectionTitle} />
        <CommonTitle title={data.mainTitle} />
        <CommonParargraph text={data.description} />
      </div>

      <div className='hide-scrollbar flex w-screen content-center items-center justify-start gap-6 overflow-x-scroll px-6 lg:w-[867px] lg:flex-wrap lg:justify-center'>
        {[{ id: 0, name: 'All' }, ...tagData]?.map((item) => (
          // <Link
          //   key={item.id}
          //   scroll={false}
          //   href={`/ourwork?tab=${item.id}`}
          //   className={`flex items-center justify-center rounded bg-lightShad2 px-4 py-2 transition-all duration-300 ${
          //     activeTab === item.id ? 'border border-primary' : 'border border-transparent'
          //   }`}
          // >
          //   <p className='whitespace-nowrap text-mainBlack'>{item.name}</p>
          // </Link>
          <Categories key={item.id} id={item?.id?.toString()} name={item?.name} />
        ))}
      </div>

      {productData?.data && productData?.data?.length > 0 ? (
        <div className='grid items-center justify-items-center gap-8 md:grid-cols-2 xl:w-[65%] xl:grid-cols-3'>
          {productData?.data?.map((product) => (
            <SpotlightCard
              key={product?.id}
              title={product?.title}
              image={product?.bgImage}
              tags={product?.productTags}
              link={`/ourwork/${product?.id}`}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className='text-center text-lg text-gray-500'>
            Apologies, but we could not find any information related to this category.
          </p>
        </div>
      )}

      <CommonButton href={`/ourwork?tab=${activeTab}&limit=${initialLimit + 15}`} text='Load More' />
    </div>
  );
};

export default SuccessStories;
