import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonBanner from '@/components/common/CommonBanner/CommonBanner';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import AitcIntro from '@/components/pages/aboutus/AitcIntro/AitcIntro';
import Corevalues from '@/components/pages/aboutus/CoreValues/Corevalues';
import HowWedoit from '@/components/pages/aboutus/HowWeDoIt/HowWedoit';
import LifeAtAitc from '@/components/pages/aboutus/LifeAtAitc/LifeAtAitc';
import MessageFromCeo from '@/components/pages/aboutus/MessageFromCeo/MessageFromCeo';
import OurCulture from '@/components/pages/aboutus/OurCulture/OurCulture';
import OurMission from '@/components/pages/aboutus/OurMission/OurMission';
import OurStory from '@/components/pages/aboutus/OurStory/OurStory';
import TechSuite from '@/components/pages/aboutus/TechSuite/TechSuite';
import WhoWeAre from '@/components/pages/aboutus/whoweare/WhoWeAre';
import WhyChooseAitc from '@/components/pages/aboutus/WhyChooseAitc/WhyChooseAitc';

const AboutUs = () => {
  return (
    <main>
      <ErrorBoundaryWrapper>
        <CommonAnimation>
          <CommonBanner url='/about-us/hero-section' />
        </CommonAnimation>
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <AitcIntro />
        <OurCulture />
        <OurStory />
        <OurMission />
        <WhyChooseAitc />
        <HowWedoit />
        <Corevalues />
        <MessageFromCeo />
        <WhoWeAre />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <TechSuite />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <LifeAtAitc />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default AboutUs;
