import IndividualCareerBanner from '@/components/pages/career/IndividualCareer/Banner';
import JobDescription from '@/components/pages/career/IndividualCareer/JobDescription';
import SimilarVacancies from '@/components/pages/career/IndividualCareer/SimilarVacancies';

const Page = () => {
  return (
    <div>
      <IndividualCareerBanner />
      <JobDescription />
      <SimilarVacancies />
    </div>
  );
};

export default Page;
