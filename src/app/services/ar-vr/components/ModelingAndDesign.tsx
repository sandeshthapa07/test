import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ModelingAndDesign = () => {
  return (
    <div className='common-padding common-section bg-lightShad2'>
      <div className=' flex max-w-[1350px] flex-col items-center gap-14'>
        <div className='flex flex-col content-center items-start justify-center gap-14 md:flex-row md:items-start '>
          <div className='flex flex-col gap-14 md:w-2/5'>
            <div className='flex flex-col gap-6 '>
              <CommonTitle title={'3D Modeling & environment design'} />
              <CommonParargraph
                text={
                  '3D modeling and environment design are fundamental to creating immersive virtual reality experiences. 3D modeling involves the creation of mathematical representations of objects or shapes, known as models. These models are built using vertices, edges, and faces to form meshes that define their structure. Texturing and shading techniques, such as UV mapping and applying materials, bring these models to life by defining their surface properties like color, reflectivity, and transparency. Sculpting and detailing add depth and realism, with high-poly models offering intricate details and low-poly models optimized for performance. Rigging and animation further enhance interactivity by providing movement and actions to the models.'
                }
                className='text-center md:text-start'
              />
            </div>
            <CommonButton href='/contact-us' text='Contact us' />
          </div>
          <div className='flex items-center '>
            <Image
              src={
                'https://plus.unsplash.com/premium_photo-1661402170986-1b47b4b397ab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt='seo'
              width={500}
              height={600}
              className='rounded-2xl object-cover xl:max-h-[600px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelingAndDesign;
