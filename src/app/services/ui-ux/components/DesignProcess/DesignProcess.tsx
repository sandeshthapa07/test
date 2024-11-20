import CommonTitle from '@/components/common/CommonTitle';

import ProcessTimeline from './ProcessTimeline';

const DesignProcess = () => {
  return (
    <div className='common-section common-padding max-w-[1350px]'>
      <CommonTitle title='Our UX/UI design process : Your journey to success' className='text-center' />
      <ProcessTimeline />
    </div>
  );
};

export default DesignProcess;
