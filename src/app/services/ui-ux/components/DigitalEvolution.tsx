import CommonButton from '@/components/common/CommonButton';
import CommonTitle from '@/components/common/CommonTitle';
import CardWrapper from '@/components/pages/aboutus/OurMission/CardWrapper';

export const features = [
  {
    id: 1,
    title: 'User-Centered Design',
    keyHighlight: 'Prioritizing user needs',
    description:
      'Our approach ensures every design decision aligns with the needs and expectations of your users, leading to more intuitive and impactful products.',
    icon: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Responsive Interfaces',
    keyHighlight: 'Seamless across all devices',
    description:
      'We create responsive designs that look and function perfectly on any screen size, enhancing accessibility and usability on both mobile and desktop.',
    icon: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Data-Driven Insights',
    keyHighlight: 'Informed by analytics',
    description:
      'Our design process is guided by data and user feedback, allowing us to make informed decisions that improve engagement and optimize user flow.',
    icon: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Cutting-Edge Technology',
    keyHighlight: 'Innovative solutions',
    description:
      'We leverage the latest technologies and design trends to create future-proof digital experiences that are visually stunning and technically robust.',
    icon: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const DigitalEvolution = () => {
  return (
    <section className='bg-lightShad2'>
      <div className='common-padding mx-auto flex max-w-[1500px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonTitle title={'Our approach to UI/UX design'} className='text-center' />
          </div>
        </div>
        <CardWrapper features={features} />
        <CommonButton text='Get a free quote' href='/' />
      </div>
    </section>
  );
};

export default DigitalEvolution;
