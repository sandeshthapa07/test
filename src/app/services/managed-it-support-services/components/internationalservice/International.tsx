import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const International = () => {
  return (
    <div className='bg-lightShad2 '>
      <div className='inter-national main-common-padding flex max-w-[1054px] flex-col items-center gap-[3.25rem]  '>
        <CommonTitle title={'Why choose AITC International for managed IT services?'} className='text-center' />
        <div className='hgrid-cols-1 grid w-fit gap-x-8     gap-y-10 sm:grid-cols-2 xl:grid-cols-3 '>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className='flex max-w-[310px] flex-col items-center gap-2' key={item}>
              <span>
                <svg width='25' height='13' viewBox='0 0 25 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g id='Vector'>
                    <path
                      d='M16.1214 -3.58813e-07C15.8993 -3.68522e-07 15.6862 0.088023 15.5292 0.244705L8.05267 7.70291C7.72559 8.02919 7.72559 8.55818 8.05267 8.88446L11.7374 12.5602C12.0645 12.8864 12.5948 12.8864 12.9218 12.5602L24.0831 1.42625C24.6107 0.899927 24.237 -4.06734e-09 23.4909 -3.66829e-08L16.1214 -3.58813e-07Z'
                      fill='#484BA0'
                    />
                    <path
                      d='M1.16929 -1.01239e-06C0.42312 -1.04501e-06 0.0494461 0.899944 0.577076 1.42626L11.7372 12.5586C12.0643 12.8849 12.5946 12.8849 12.9216 12.5586L16.6059 8.88339C16.9329 8.55712 16.933 8.02814 16.6059 7.70187L9.13093 0.244724C8.97386 0.0880303 8.76082 -6.80554e-07 8.53869 -6.90264e-07L1.16929 -1.01239e-06Z'
                      fill='#FF7500'
                    />
                  </g>
                </svg>
              </span>
              <div className='flex flex-col gap-4'>
                <CommonHeader title={'24/7 Support'} className='text-center' />
                <CommonParargraph
                  text={`We are a Nepal-based company with a deep understanding of the local IT landscape and regulations.`}
                  className='text-center'
                />
              </div>
            </div>
          ))}
        </div>
        <CommonButton text='Book a free consultation' href={''} className='mx-auto' />
      </div>
    </div>
  );
};

export default International;
