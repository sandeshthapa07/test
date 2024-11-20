import { Suspense } from 'react';

import IndividualDetail from './IndividualDetail';
import Menu from './Menu';
import ProductDevelopment from './ProductDevelopment';

export interface Menu {
  id: number;
  title: string;
  icon: string;
  url: string;
}
const menu: Menu[] = [
  {
    id: 1,
    title: 'Product Development',
    icon: '/images/code.png',
    url: 'productdevelopment',
  },
  {
    id: 2,
    title: 'Product Strategy',
    icon: '/images/crafting.png',
    url: 'productstrategy',
  },
  {
    id: 3,
    title: 'Product Design',
    icon: '/images/design.png',
    url: 'productdesign',
  },
  {
    id: 4,
    title: 'Product Engineering',
    icon: '/images/engineering.png',
    url: 'productengineering',
  },
  {
    id: 5,
    title: 'Product Management',
    icon: '/images/engineering.png',
    url: 'productmanagement',
  },
];

const menuDetails = {
  id: 1,
  title: 'Product Development',
  urlid: 'productdevelopment',
  icon: '/images/code.png',
  description:
    "At AITC, before any project begins, we embark on requirement analysis. Through meticulous research and collaboration, we gather and prioritize every detail to lay a solid foundation for success. It's not just a phase; it's the cornerstone of our innovation, driving clarity and efficiency at every turn.",
  steps: [
    {
      id: 1,
      title: 'Requirement Analysis',
    },
    {
      id: 2,
      title: 'Design',
    },
    {
      id: 3,
      title: 'Development ',
    },
    {
      id: 4,
      title: 'Testing',
    },
  ],
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading... Skeleton required </div>}>
      <ProductDevelopment>
        <Menu menulist={menu} />
        <Suspense fallback={<div>Loading...</div>}>
          <IndividualDetail menuDetails={menuDetails} />
        </Suspense>
      </ProductDevelopment>
    </Suspense>
  );
};

export default Page;

// const Skeleton = () => {
//   return (
//     <div className='animate-pulse bg-gray-400'>
//       <div className='h-48 w-full rounded-2xl bg-slate-200'></div>
//     </div>
//   );
// };
