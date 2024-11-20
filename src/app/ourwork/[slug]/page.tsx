import { fetchData } from '@/utils/getData';
import { type SpecificPageDTO } from '@/types/ourwork/specificpageDTO';
import AboutProject from '@/components/pages/ourwork/SpecificWork/AboutProject';
import Features from '@/components/pages/ourwork/SpecificWork/Features';
import FeaturesExplored from '@/components/pages/ourwork/SpecificWork/FeaturesExplored';
import Instructions from '@/components/pages/ourwork/SpecificWork/Instructions';
import Platforms from '@/components/pages/ourwork/SpecificWork/Platforms';
import Solutions from '@/components/pages/ourwork/SpecificWork/Solutions';
import TeamMembers from '@/components/pages/ourwork/SpecificWork/TeamMembers';
import TechnologyUsed from '@/components/pages/ourwork/SpecificWork/TechnologyUsed';
import WorkImage from '@/components/pages/ourwork/SpecificWork/WorkImage';

const ComponentMapping: {
  [key: string]: (props: { id: string; position?: number }) => JSX.Element | Promise<JSX.Element>;
} = {
  sectionOne: TechnologyUsed,
  sectionTwo: AboutProject,
  sectionThree: Features,
  sectionFour: FeaturesExplored,
  sectionFive: TeamMembers,
  sectionSix: Solutions,
  sectionSeven: WorkImage,
  sectionEight: WorkImage,
  sectionNine: Instructions,
  sectionTen: Platforms,
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchData<SpecificPageDTO>(`/our-work/section-detail-of-products/${params?.slug}`);

  const sortedComponents = Object.keys(data)
    .sort((a, b) => {
      const aPosition = data[a as keyof typeof data]?.position;
      const bPosition = data[b as keyof typeof data]?.position;
      return (aPosition ?? 0) - (bPosition ?? 0);
    })
    .map((key: string) => {
      const Component = ComponentMapping[key as keyof SpecificPageDTO];

      const { id, position } = data[key as keyof SpecificPageDTO];
      return Component ? <Component key={key} id={id} position={position} /> : null;
    });

  // Render the sorted components
  return <>{sortedComponents}</>;
};

export default Page;
