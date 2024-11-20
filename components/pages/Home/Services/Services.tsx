import HeadingSection, { MediumScreenHeadingSection } from './HeadingSection';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <section
      className='0  flex flex-col items-center justify-center gap-10 px-6 py-[3.75rem] xmd:gap-[3.25rem]
    xmd:px-16 xmd:py-[6.25rem]  lg:gap-[6.25rem] lg:px-[6.25rem] xl:px-[12.125rem] 2xl:flex-row 2xl:items-start 2xl:px-[6.25rem] 3xl:px-[9.375rem] '
    >
      <HeadingSection />
      <MediumScreenHeadingSection />
      <ServicesList />
    </section>
  );
};

export default Services;
