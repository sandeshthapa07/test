'use client';

import { useState } from 'react';

import { type FAQSection } from '@/types/Home/faqsection';

import FAQAccordion from './FAQAccordion';

const FAQMain = ({ data }: { data: FAQSection }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='flex w-full flex-col gap-[18px] px-6 py-14 lg:px-16 lg:py-20 xl:px-[150px] xl:py-[100px]'>
      {data?.faqList?.map((item, index) => (
        <FAQAccordion
          key={item.id}
          question={item.question}
          answer={item.answer}
          open={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQMain;
