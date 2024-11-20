import CommonTitle from '@/components/common/CommonTitle';

import { MiddleImage } from '../../software-development/components/MainImage';

const WebDevelopment = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='benefits-web-development bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1100px] flex-col items-center gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title='Benefits of Web Development' className='text-center' />
        <div className='grid grid-cols-1 gap-8 xmd:grid-cols-2 lg:grid-cols-3'>
          <MiddleImage index={Math.ceil(data?.length / 2)} />
          {data?.map((item, index) => (
            <li
              key={item}
              className='reason-item flex w-fit flex-row items-center rounded-lg  bg-lightShade1 xl:whitespace-nowrap'
            >
              <p
                className='rounded-lg bg-primary p-4'
                style={{
                  boxShadow: ' 3px 0px 4px 0px rgba(255, 117, 0, 0.22)',
                }}
              >
                {' '}
                <span className='rounded bg-white px-[0.4375rem] py-[0.3125rem]'>
                  {String(index + 1)?.padStart(2, '0')}
                </span>
              </p>

              <p className='p-4 xl:whitespace-nowrap'>Innovative environment</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
