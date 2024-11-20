import { cn } from '@/utils/cn';
import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

/**
 * Introduction component for SEO services page. Reference: Second component of SEO Page
 *
 * @param {string} title Title of introduction section
 * @param {string} description Text of introduction section
 * @param {string} image Image of introduction section
 *
 * @returns {JSX.Element} Introduction section component
 */
const Introduction = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div className='common-padding common-section flex flex-col items-center gap-14'>
        <CommonTitle title={title} className='text-center' />
        <div className='flex flex-col content-center items-start justify-center gap-14 md:flex-row md:items-start '>
          <div className='flex items-center '>
            <Image
              src={image}
              alt='seo'
              width={500}
              height={500}
              className='rounded-2xl object-cover xl:max-h-[520px]'
            />
          </div>
          <div className='flex flex-col gap-14 md:w-1/2 xl:w-1/3'>
            <div className='flex flex-col gap-6 '>
              <CommonParargraph text={description} className='text-center md:text-start' />
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='flex flex-row items-center gap-4'>
                  <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                  <CommonParargraph text='Provide secure, stable app maintenance' />
                </div>
              ))}
            </div>
            <CommonButton href='/contact-us' text='Book a free consultation' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
