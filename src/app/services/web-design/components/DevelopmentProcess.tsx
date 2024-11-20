import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const DevelopmentProcess = () => {
  return (
    <div className='bg-lightShad2'>
      <div className='main-common-padding flex flex-col gap-10 lg:gap-[3.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title='Development Process' className='text-center' />
          <CommonParargraph
            text={`We follow industry-standard Software Development Life Cycle (SDLC) methodologies, including Agile and Waterfall, to ensure a structured and efficient development process. Our typical Software development cycle involves: to ensure a structured and efficient development process. Our typical Software development cycle involves:`}
            className='text-center'
          />
        </div>
        <Steps />
      </div>
    </div>
  );
};

export default DevelopmentProcess;

const Steps = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-row items-center gap-4'>
        <span className='whitespace-nowrap rounded bg-primary p-1 text-lg text-white'>Stage 1 : </span>
        <CommonTitle title='Planning and Requirements Gathering' />
      </div>
      <div className='images relative h-[475px] w-full'>
        <Image src='/deletable/web-design.png' alt='arrow' fill className='rounded-2xl' />
      </div>
      <CommonParargraph
        text={`In the first week, we’ll have collaborative workshops to align project objectives and goals and create low-fidelity wireframes to provide a visual foundation for the project.In the first week, we’ll have collaborative workshops to align project objectives and goals and create low-fidelity wireframes to provide a visual foundation for the project.In the first week, we’ll have collaborative workshops to align project objectives and goals and create low-fidelity wireframes to provide a visual foundation for the project.`}
      />
    </div>
  );
};
