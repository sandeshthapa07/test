import Corevalues from '@/components/pages/aboutus/CoreValues/Corevalues';
import Banner from '@/components/pages/career/Banner';
import Benefits from '@/components/pages/career/Benefits/Benefits';
import Diversity from '@/components/pages/career/Diversity/Diversity';
import JoinOurTeam from '@/components/pages/career/JoinOurTeam';
import JoinUs from '@/components/pages/career/JoinUs/JoinUs';

const Career = () => {
  return (
    <div>
      <Banner />
      <JoinOurTeam />
      <JoinUs />
      <Diversity />
      <Corevalues />
      <Benefits />
    </div>
  );
};

export default Career;
