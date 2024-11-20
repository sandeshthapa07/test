import { cn } from '@/utils/cn';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import AugmentedRealityCard from './AugmentedRealityCard';

const AugmentedReality = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'augmented-reality')}>
      <div className='common-section common-padding max-w-[1350px] '>
        <CommonTitle title='Mixed reality experiences' />
        <Image
          src='https://images.unsplash.com/photo-1728602484721-7fa5eed36a64?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='check'
          width={1000}
          height={1000}
          className='h-[370px] w-[550px] rounded-2xl object-cover'
        />
        <CommonParargraph
          text='Mixed Reality (MR) seamlessly blends the physical and digital worlds, allowing physical and virtual objects to coexist and interact in real-time. This innovative technology combines the strengths of both Augmented Reality (AR) and Virtual Reality (VR) to create immersive environments where users can engage with digital content integrated within their physical surroundings. MR relies on advanced sensors, processors, and software to accurately map and understand the physical environment, enabling precise placement and interaction of digital objects. Spatial mapping and object recognition are critical, as MR devices like Microsoft HoloLens scan the environment to create a digital twin, allowing virtual elements to interact with real-world objects. Here are some key aspects of mixed reality experiences :'
          className='text-center'
        />
        <p className='rounded-lg bg-primary p-1 text-lg font-black leading-[150%] tracking-[0.36px] text-white'>
          Key features of AR
        </p>
        <div
          style={{
            backgroundImage: `url("/svg/ar.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
          className='flex w-full flex-col gap-8'
        >
          {[1, 2, 3].map((item, index) => (
            <div key={index} className={cn(index % 2 === 0 ? 'justify-start ' : 'justify-end', 'flex w-full')}>
              <div className={cn('flex flex-row items-start gap-6', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')}>
                <AugmentedRealityCard showImage />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AugmentedReality;
