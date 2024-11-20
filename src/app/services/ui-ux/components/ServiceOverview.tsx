import CommonButton from '@/components/common/CommonButton';
import CommonTitle from '@/components/common/CommonTitle';
import Description from '@/components/pages/aboutus/OurStory/Description';

const ServiceOverview = () => {
  return (
    <section className='ourstory common-padding mx-auto flex max-w-[1354px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
      <div className='flex flex-col items-center gap-2'>
        <CommonTitle title={'Elevate your digital experience with AITC'} className='text-center' />
      </div>
      <Description
        text={
          'Welcome to AITC, where exceptional user experiences meet cutting-edge design. As the CEO and a seasoned senior product designer with over 20 years of expertise, I lead a dedicated team of professionals committed to transforming your digital presence. Our mission is to craft intuitive, engaging, and impactful digital solutions tailored to the unique needs of your business. At AITC, we understand that the success of any digital product hinges on how well it meets the needs and expectations of its users. That’s why our UX/UI design services are meticulously designed to create seamless interactions, stunning visuals, and memorable experiences that drive user satisfaction and business growth.'
        }
        image={
          'https://plus.unsplash.com/premium_photo-1661497675847-2075003562fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <CommonButton href='/ourwork' text='Explore our work' />
    </section>
  );
};

export default ServiceOverview;
