import { fetchData } from '@/utils/getData';

import { type BannerResponse } from '@/types/aboutus/banner';

import CommonButton from '../CommonButton';
import CommonTitle from '../CommonTitle';

interface IProps {
  url: string;
}

const CommonBanner = async ({ url }: IProps) => {
  const bannerData = await fetchData<BannerResponse>(url);
  const { bgImage, title: bannerTitle } = bannerData;

  return (
    <section className='flex flex-col gap-4 xl:flex-row'>
      <div className='flex flex-col items-center justify-center gap-12 px-6 py-10 xmd:px-16 xmd:py-[3.25rem] xl:w-1/2 '>
        <div className='flex max-w-[616px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start '>
          <CommonTitle title={bannerTitle} className='text-center capitalize xl:text-left' />
          <CommonButton href='/contactus' text='Contact us' />
        </div>
      </div>
      {/* large screen image or svg 1280 */}
      <span className='hidden xl:block xl:w-1/2'>
        <svg width='100%' height='597' viewBox='0 0 986 597' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <clipPath id='clip-shape-lg'>
              <path d='M4.01989 266.769L55.7439 31.4141C59.7756 13.0689 76.0286 0 94.8116 0H985.5V597H523.508H93.7896C74.9568 597 58.6748 583.863 54.6936 565.456L3.91365 330.676C-0.641939 309.613 -0.605711 287.816 4.01989 266.769Z' />
            </clipPath>
          </defs>

          <image
            href={bgImage}
            x='0'
            y='0'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            clipPath='url(#clip-shape-lg)'
          />

          <path
            d='M4.01989 266.769L55.7439 31.4141C59.7756 13.0689 76.0286 0 94.8116 0H985.5V597H523.508H93.7896C74.9568 597 58.6748 583.863 54.6936 565.456L3.91365 330.676C-0.641939 309.613 -0.605711 287.816 4.01989 266.769Z'
            fill='none'
            stroke='none'
          />
        </svg>
      </span>
      {/* small screen banner svg  below 1280 */}
      <span className='block xl:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='529'
          viewBox='0 0 834 529'
          className='size-full'
          fill='none'
        >
          <defs>
            <clipPath id='clip-shaped-sm'>
              {' '}
              <path d='M429.189 1.05105L797.356 32.0466C818.073 33.7908 834 51.1152 834 71.9057L834 529L2.31233e-05 529L1.23163e-05 281.763L3.11876e-06 71.349C2.20909e-06 50.5382 15.9574 33.204 36.6971 31.4856L404.22 1.03451C412.529 0.346046 420.881 0.351578 429.189 1.05105Z' />{' '}
            </clipPath>
          </defs>

          <image
            href={bgImage}
            x='0'
            y='0'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            clipPath='url(#clip-shaped-sm)'
          />
          <path
            d='M429.189 1.05105L797.356 32.0466C818.073 33.7908 834 51.1152 834 71.9057L834 529L2.31233e-05 529L1.23163e-05 281.763L3.11876e-06 71.349C2.20909e-06 50.5382 15.9574 33.204 36.6971 31.4856L404.22 1.03451C412.529 0.346046 420.881 0.351578 429.189 1.05105Z'
            fill='none'
          />
        </svg>
      </span>
    </section>
  );
};

export default CommonBanner;
