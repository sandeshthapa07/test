import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';

const AugmentedRealityCard = ({ showImage }: { showImage?: boolean }) => {
  return (
    <>
      {showImage && (
        <Image
          src='https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='vr'
          width={300}
          height={300}
          className='size-[90px] rounded-2xl object-cover md:size-[132px]'
        />
      )}
      <div className='flex flex-col gap-2'>
        <p className='bg-secondary py-1 text-lg font-black text-white'>Enhanced perception</p>
        <CommonParargraph
          text='AR enhances real-world environments with digital overlays, providing additional information or interactive elements.'
          className='sm:max-w-[300px]'
        />
      </div>
    </>
  );
};

export default AugmentedRealityCard;
