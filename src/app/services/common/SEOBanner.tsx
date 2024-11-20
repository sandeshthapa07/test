import { cn } from '@/utils/cn';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

/**
 * Renders an SEO banner component with a title, subtitle, optional description,
 * and a button. It displays an image in a wrapper and arranges content in a
 * flexible layout suitable for various screen sizes. Reference: SEO Page
 *
 * @param {Object} props - The properties for the SEO banner.
 * @param {string} props.subtitle - The subtitle text for the banner.
 * @param {string} props.title - The main title text for the banner.
 * @param {string} [props.description] - An optional description text for the banner.
 * @param {string} props.image - The image URL for the banner background.
 * @param {string} props.buttonText - The text displayed on the banner button.
 */
const SEOBanner = ({
  subtitle,
  title,
  description,
  image,
  buttonText,
}: {
  subtitle: string;
  title: string;
  description?: string;
  image: string;
  buttonText: string;
}) => {
  return (
    <BannerWrapper image={image} className='bg-lightShad2'>
      <div
        className={cn(
          'flex max-w-[616px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start',
          description && 'gap-8'
        )}
      >
        <div className='flex flex-col items-center gap-2 xl:items-start'>
          <p className='text-center text-lg font-black  leading-[150%] tracking-[0.36px] text-primary xl:text-left'>
            {subtitle?.charAt(0).toUpperCase() + subtitle?.slice(1)}
          </p>
          <CommonTitle title={title} className='text-center  xl:text-left' />
        </div>
        <div className='flex flex-col items-center gap-6 xl:items-start'>
          {description && <CommonParargraph text={description} className='text-center lg:text-start' />}
          <CommonButton href='/contact-us' text={buttonText} />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default SEOBanner;
