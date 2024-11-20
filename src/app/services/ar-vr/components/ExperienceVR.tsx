import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ExperienceVR = () => {
  return (
    <div className='mixed-reality-experiences common-padding common-section max-w-[1460px]'>
      <CommonTitle title='Mixed reality experiences' />
      <Image
        src='https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='check'
        width={1000}
        height={1000}
        className='h-[370px] w-[550px] rounded-2xl object-cover'
      />
      <CommonParargraph
        text='Mixed Reality (MR) seamlessly blends the physical and digital worlds, allowing physical and virtual objects to coexist and interact in real-time. This innovative technology combines the strengths of both Augmented Reality (AR) and Virtual Reality (VR) to create immersive environments where users can engage with digital content integrated within their physical surroundings. MR relies on advanced sensors, processors, and software to accurately map and understand the physical environment, enabling precise placement and interaction of digital objects. Spatial mapping and object recognition are critical, as MR devices like Microsoft HoloLens scan the environment to create a digital twin, allowing virtual elements to interact with real-world objects. Here are some key aspects of mixed reality experiences :'
        className='text-center'
      />
      <div className='flex flex-wrap justify-center gap-8'>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className='flex flex-col gap-4 rounded-2xl bg-lightShad2 p-4 lg:max-w-[365px]'>
            <p className='rounded-lg bg-secondary p-2 text-lg font-black leading-[150%] tracking-[0.36px] text-white'>
              Realtime processing & performance
            </p>
            <CommonParargraph text='Spatial mapping and understanding are foundational to MR development. MR devices, like Microsoft HoloLens, utilize advanced sensors to scan and create a digital representation of the physical environment. This process, known as spatial mapping, allows the MR system to accurately anchor digital objects within the real world.' />
          </div>
        ))}
      </div>
      <CommonButton href='/contact-us' title='Get a free quote' />
    </div>
  );
};

export default ExperienceVR;
