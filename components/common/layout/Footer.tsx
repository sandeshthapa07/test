import Link from 'next/link';

import CommonParargraph, { SocialMedia } from '../CommonParargraph';
import { CommonHeader } from '../CommonTitle';
import { Services } from './services/FooterServcies';

const companyMenu = [
  {
    id: 1,
    title: 'About',
    url: '/aboutus',
  },
  {
    id: 2,
    title: 'Career',
    url: '/career',
  },
  {
    id: 3,
    title: 'Our Works',
    url: '/ourworks',
  },
  {
    id: 4,
    title: 'Insights',
    url: '/insights',
  },
];

const Footer = () => {
  return (
    <footer className='footer grid w-full grid-cols-1 gap-8  py-4 xmd:grid-cols-3 xmd:flex-row  xmd:justify-between lg:grid-cols-4 lg:gap-11  xl:gap-24  '>
      <LogoDetails />

      <Services />

      <Company />

      <ContactUs />
    </footer>
  );
};

export default Footer;

const LogoDetails = () => {
  return (
    <div className='col-span-full flex flex-col items-center justify-center gap-6 pb-2 lg:col-span-1 lg:mb-0 lg:items-start'>
      <svg
        width='107'
        height='143'
        viewBox='0 0 48 61'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <mask
          id='mask0_5045_66571'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='48'
          height='61'
        >
          <path d='M48 0H0V60.2881H48V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_5045_66571)'>
          <path
            d='M10.6852 51.6216H4.302L3.08545 54.5731H-0.175781L5.95094 40.7994H9.09248L15.2412 54.5731H11.9018L10.6852 51.6216ZM9.68365 49.2012L7.50461 43.9271L5.32557 49.2012H9.68365ZM16.6678 40.7994H19.8509V54.5731H16.6678V40.7994ZM25.9605 43.396H21.5609V40.7994H33.5407V43.396H29.1436V54.5731H25.9605V43.396ZM41.6438 54.8105C40.2415 54.8105 38.9737 54.5095 37.8329 53.905C36.7067 53.2883 35.8175 52.4415 35.1628 51.3671C34.5203 50.278 34.2003 49.0519 34.2003 47.6863C34.2003 46.3231 34.5203 45.1018 35.1628 44.0275C35.8175 42.9384 36.7067 42.0916 37.8329 41.4896C38.9712 40.8728 40.2489 40.5645 41.6633 40.5645C42.8554 40.5645 43.9278 40.7749 44.8854 41.1934C45.8553 41.6144 46.6663 42.2164 47.321 43.0045L45.2787 44.8938C44.348 43.817 43.1974 43.281 41.8221 43.281C40.972 43.281 40.2122 43.4719 39.5429 43.8513C38.876 44.2184 38.3508 44.7372 37.9721 45.4053C37.6057 46.0734 37.4225 46.8346 37.4225 47.6887C37.4225 48.5404 37.6057 49.3015 37.9721 49.9721C38.3508 50.6402 38.876 51.1664 39.5429 51.5457C40.2098 51.9128 40.9695 52.0964 41.8221 52.0964C43.1974 52.0964 44.3505 51.5531 45.2787 50.464L47.321 52.3534C46.6663 53.1536 45.8553 53.763 44.8854 54.184C43.9156 54.6049 42.8334 54.8105 41.6438 54.8105Z'
            fill='#FF7500'
          />
          <path
            d='M29.5194 1.22461H18.4825C12.0895 1.22461 6.9082 6.41545 6.9082 12.8202V23.8773C6.9082 30.2821 12.092 35.4729 18.4825 35.4729H29.5194C35.9124 35.4729 41.0938 30.2796 41.0938 23.8773V12.8202C41.0938 6.41545 35.9124 1.22461 29.5194 1.22461Z'
            fill='#FF7500'
          />
          <path
            d='M30.7017 8.1192L28.9281 8.13389C28.1513 8.14123 27.5259 8.77509 27.5333 9.55335L27.5455 11.1074C27.5528 11.8857 28.1855 12.5122 28.9623 12.5049L30.7359 12.4902C31.5127 12.4828 32.1381 11.849 32.1308 11.0707L32.1185 9.51664C32.1137 8.73838 31.4785 8.11186 30.7017 8.1192Z'
            fill='white'
          />
          <path
            d='M14.472 27.2499C14.4696 27.2303 14.4696 27.2107 14.472 27.1936V27.1055C14.4647 27.1471 14.472 27.1911 14.472 27.2499Z'
            fill='#FF7500'
          />
          <path
            d='M33.6828 18.8568C33.6828 19.2239 33.5412 19.5763 33.2847 19.8407C33.0282 20.105 32.6813 20.2567 32.3148 20.2665H32.244L32.3002 27.0334C32.3026 27.4079 32.1561 27.7652 31.8947 28.032C31.6333 28.2987 31.2791 28.4505 30.9053 28.4553H29.1245C28.7507 28.4578 28.394 28.311 28.1278 28.0491C27.8615 27.7872 27.71 27.4324 27.7051 27.0579L27.6221 20.3106L18.752 20.3815L18.7838 24.1896L25.5896 24.1333C25.9634 24.1309 26.3225 24.2753 26.5912 24.5371C26.8575 24.799 27.0114 25.1563 27.0163 25.5308V27.0848C27.0211 27.4544 26.8819 27.8092 26.6303 28.0785C26.3762 28.3477 26.0293 28.5043 25.6605 28.519L15.8841 28.5948C15.5201 28.5973 15.1683 28.4602 14.9045 28.2082C14.6407 27.9561 14.4843 27.6135 14.4697 27.2488C14.4697 27.1974 14.4697 27.1534 14.4697 27.102V25.6164L14.3817 17.4912V17.452C14.3793 17.4129 14.3793 17.3762 14.3817 17.337C14.4086 16.9846 14.5674 16.6542 14.8239 16.4119C15.0828 16.1696 15.4224 16.0326 15.7742 16.0301L27.583 15.9298V14.7502C27.5806 14.3782 27.7271 14.0208 27.9861 13.7541C28.245 13.4873 28.5992 13.3356 28.9706 13.3282H30.7563C30.9395 13.3258 31.1227 13.3601 31.2937 13.4286C31.4647 13.4971 31.6211 13.5999 31.7505 13.7272C31.8825 13.8569 31.9875 14.0111 32.0583 14.1799C32.1292 14.3488 32.1683 14.5323 32.1683 14.7159V15.9029H32.244C32.6153 15.9004 32.9744 16.0473 33.2382 16.3091C33.5021 16.571 33.6535 16.9259 33.656 17.3003L33.6828 18.8568Z'
            fill='white'
          />
          <path
            d='M25.4887 8.16217L15.7123 8.24294C14.9355 8.25028 14.3101 8.88659 14.3174 9.6624L14.3297 11.2165C14.337 11.9947 14.9697 12.6213 15.7465 12.6139L25.5229 12.5331C26.2997 12.5258 26.9251 11.8919 26.9178 11.1137L26.9056 9.55961C26.9007 8.78135 26.2655 8.15483 25.4887 8.16217Z'
            fill='white'
          />
        </g>
      </svg>
      <CommonParargraph
        text='Hospitality is about creating exceptional guest experiences. Effective
        management ensures seamless operations.'
        className='text-center lg:max-w-[282px] lg:text-start'
      />
      <SocialMedia />
    </div>
  );
};

const Company = () => {
  return (
    <div className='flex flex-col gap-[1.125rem]'>
      <CommonHeader title='COMPANY' />
      <div className='companymenu  flex flex-col gap-4'>
        {companyMenu.map((menu) => (
          <Link href={menu.url} key={menu.id} className=''>
            <CommonParargraph text={menu.title} className='hover:text-black' />
          </Link>
        ))}
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className='flex flex-col gap-6'>
      <CommonHeader title='CONTACT US' />
      <div className='flex flex-col gap-4'>
        {' '}
        <a href='mailto:aitc@gmail.com'>aitc@gmail.com</a>
        <div className='flex flex-col gap-2'>
          <CommonParargraph text='Nepal' className='text-primary' />
          <a
            href='tel:04659693'
            className='font-medium text-mainBlack  xmd:text-lg'
          >
            04659693
          </a>
          <CommonParargraph text='Radhe Radhe, Bhaktapur - Nepal,44800' />
        </div>
        <div className='flex flex-col gap-2'>
          <CommonParargraph text='USA' className='text-primary' />
          <a
            href='tel:04659693'
            className='font-medium text-mainBlack  xmd:text-lg'
          >
            04659693
          </a>
          <CommonParargraph text='2201 Spinks Rd, Flower Mound,Texas, 75022' />
        </div>
      </div>
    </div>
  );
};

export const TermsAndConditions = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='flex flex-col items-center justify-center gap-10 border-t-2 border-lightShade1  pt-6 xmd:flex-row'>
      <p className='text-grey'>Terms & Conditions</p>
      <p className='text-grey'>Privacy Policy</p>
      <p className='text-center text-primary '>
        &copy; Copyright : {year} AiTC INTERNATIONAL{' '}
      </p>
    </div>
  );
};
