'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import CommonButton from '@/components/common/CommonButton';

interface Category {
  id: number;
  title: string;
  icon: string;
  subcategories: {
    description: string;
    category: {
      id: number;
      url: string;
      title: string;
    }[];
  };
}

const services: Category[] = [
  {
    id: 1,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Web Development',
    icon: 'image',
    subcategories: {
      description:
        'Sandesh Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 7,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
];

const ServicesList = () => {
  const [index, setIndex] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    setIndex(index);
  };

  const getSubcategoriesById = (id: number) => {
    const service = services.find((service) => service.id === id);
    return service ? service.subcategories : { description: '', category: [] };
  };
  // xl:grid-cols-[repeat(3,minmax(0,262px))]
  return (
    <LayoutGroup>
      <motion.ul
        layout
        className='grid w-full grid-cols-1 place-items-center gap-6 xmd:grid-cols-2 lg:grid-cols-3 xl:w-fit xl:grid-cols-[repeat(3,262px)]  '
      >
        {' '}
        {services.map((service) => (
          <motion.li
            layout
            onClick={() => handleIndex(service?.id)}
            className='services-1 flex w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-2xl border border-border px-4 py-6'
            key={service?.id}
          >
            <div className='h-[95px] w-[123px] rounded-2xl bg-lightShade1'></div>
            <p className='text-center text-lg font-medium  text-mainBlack'>{service.title}</p>
          </motion.li>
        ))}
        <SubCategoryRowStart
          index={index}
          openIndex={openIndex === index}
          subcategories={getSubcategoriesById(index)}
        />
      </motion.ul>
    </LayoutGroup>
  );
};

export default ServicesList;

const SubCategoryRowStart = ({
  index,
  openIndex,
  subcategories,
}: {
  index: number;
  openIndex: boolean;
  subcategories: {
    description: string;
    category: {
      id: number;
      url: string;
      title: string;
    }[];
  } | null;
}) => {
  return (
    <AnimatePresence>
      {openIndex && (
        <li className='subcategory-row col-span-full '>
          <motion.div
            className='relative  gap-6 rounded-lg border border-border p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='flex flex-col gap-6'>
              <p>{subcategories?.description}</p>

              <div className='flex flex-row flex-wrap gap-4'>
                {subcategories?.category?.map((category) => (
                  <Link
                    href={category?.url}
                    key={category?.id}
                    className='rounded-[6px] bg-lightShad2 p-4 font-medium text-mainBlack'
                  >
                    {category?.title}
                  </Link>
                ))}
              </div>
              <CommonButton text='Learn more' variant='secondary' href='/contactus' />
            </div>
            <span className='arrow-indicator absolute bottom-[99.3%]'>
              <svg width='23' height='20' viewBox='0 0 23 20' fill='white' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 18.5217L10.2863 1.5746C10.7042 0.811841 12.0304 0.806796 12.4484 1.56954C14.8059 5.87111 20.3357 15.9612 22 19'
                  stroke='#C2C2F0'
                />
              </svg>
            </span>
          </motion.div>
          <style jsx>{`
            .subcategory-row {
              grid-row-start: ${index + 1};
            }
            .arrow-indicator {
              right: 50%;
            }
            @media (min-width: 835px) {
              .subcategory-row {
                grid-row-start: ${Math.floor((index + 3) / 2)};
              }
              .arrow-indicator {
                right: ${index % 2 === 0 ? '21%' : '74%'};
              }
            }
            @media (min-width: 1025px) {
              .subcategory-row {
                grid-row-start: ${Math.floor((index + 5) / 3)};
              }
              .arrow-indicator {
                right: ${index % 3 === 0 ? '15%' : index % 3 === 1 ? '80%' : '50%'};
              }
            }
          `}</style>
        </li>
      )}
    </AnimatePresence>
  );
};
