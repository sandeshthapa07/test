import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const SEOProcess = ({ steps }: { steps?: boolean }) => {
  return (
    <div className='main-common-padding relative mx-auto flex max-w-[1354px]'>
      <div className=' flex w-full flex-col items-center justify-center gap-10  xl:flex-row xl:items-start'>
        <div className='flex flex-col gap-12 xl:sticky xl:top-28'>
          <Image
            src={
              'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            width={600}
            height={600}
            alt='seo image'
            className='rounded-lg object-cover xl:max-h-[300px]'
          />
          <CommonTitle title='Our SEO process includes' />
        </div>

        <div className=' flex flex-col gap-8 xl:max-w-[500px]'>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              style={{
                backgroundColor: index % 2 === 0 ? '#fff6ef' : '#f8f8ff',
              }}
              key={item}
              className='sticky top-28 flex flex-col items-start gap-4 rounded-2xl p-6'
            >
              <div className='flex flex-row items-center gap-4'>
                <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                <p className='text-[22px] font-black'>Planning and Research</p>
              </div>
              <CommonParargraph text='This initial phase involves conducting a website audit to assess your current SEO standing. Competitor analysis helps you understand what strategies your competitors are using, while keyword research uncovers the terms your target audience is searching for. By setting clear goals - like increasing website traffic or boosting brand awareness.' />
              {steps && (
                <div className='flex flex-col gap-4 font-semibold capitalize leading-[150%] tracking-[0.32px] text-secondary'>
                  <p>Website Audit</p>
                  <p>Website Audit</p>
                  <p>Website Audit</p>
                  <p>Website Audit</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOProcess;
