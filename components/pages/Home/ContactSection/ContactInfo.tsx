import { Suspense } from 'react';

import ContactForm from './ContactForm';

const ContactInfo = () => {
  return (
    <div className='grid w-full grid-cols-1 gap-8 xl:w-fit xl:grid-cols-2'>
      <div className='flex h-fit flex-col gap-8 rounded-2xl bg-secondary p-6 text-white'>
        <div className='flex flex-col gap-4'>
          <p className='text-xl font-black'>Contact</p>
          <p className='text-lg'>Our friendly team is here to help</p>
          <p className='text-lg'>+977-9867458575</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-xl font-black'>What will you get?</p>
          <div className='grod-cols-1 grid gap-6 md:grid-cols-2 lg:max-w-[80%]'>
            <p className='text-lg'>- Client Oriented</p>
            <p className='text-lg'>- Driven</p>
            <p className='text-lg'>- Secured</p>
            <p className='text-lg'>- Solving</p>
            <p className='text-lg'>- Competent</p>
            <p className='text-lg'>- Transparent</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-xl font-black'>What next?</p>
          <p className='text-lg'>- We will contact you at your convenience</p>
          <p className='text-lg'>- We do discovery and deep discussion on your problems</p>
          <p className='text-lg'>- We prepare a proposal</p>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default ContactInfo;
