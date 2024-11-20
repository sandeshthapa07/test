/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { consulatationSchema, generalEnquirySchema, serviceSchema } from '@/src/schemas/constactusSchema';
import { validateRecaptcha } from '@/utils/actions';
import { cn } from '@/utils/cn';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { ReCAPTCHA } from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { CommonHeader } from '@/components/common/CommonTitle';
import AvailableDate from '@/components/common/Form/AvailableDate';
import CommonImage from '@/components/common/Form/CommonImage';
import CommonInput from '@/components/common/Form/CommonInput';
import CommonTextArea from '@/components/common/Form/CommonTextArea';

const typeofForm: {
  id: string;
  name: string;
}[] = [
  {
    id: 'general_enquiry',
    name: 'General Enquiry',
  },
  {
    id: 'service_enquiry',
    name: 'Service Enquiry',
  },
  {
    id: 'book_a_consulatation',
    name: 'Book a consultation',
  },
];

const ContactForm = () => {
  const params = useSearchParams().get('form');
  const [selectedForm, setSelectedForm] = useState<string>('general_enquiry');

  useEffect(() => {
    if (params) {
      setSelectedForm(params);
      const element = document.getElementById(selectedForm);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [params, selectedForm]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      // @ts-expect-error
      selectedForm === 'general_enquiry'
        ? generalEnquirySchema
        : selectedForm === 'service_enquiry'
          ? serviceSchema
          : consulatationSchema
    ),
    mode: 'all',
  });

  const onSubmit = (data: unknown) => {
    console.log(data, 'data');
  };

  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
  const onReCaptchaChange = async () => {
    if (recaptchaRef.current) {
      const token = recaptchaRef.current.getValue();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await validateRecaptcha(token as string);
      console.log(data, 'aayo hai aayo');
    }
  };

  const today = new Date();

  // Set the day to tomorrow
  const tomorrowDate = new Date(today);
  tomorrowDate.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState(tomorrowDate);

  return (
    <div id={params ?? 'general_enquiry'} className='contactus flex flex-col gap-8 rounded-2xl bg-white p-6'>
      <CommonHeader title='Get in touch' className='text-center' />
      <div className='formtypemenu flex flex-row justify-center gap-8'>
        {typeofForm?.map((menu) => (
          <Link
            href={`?form=${menu.id}`}
            scroll={false}
            className={cn('relative py-[8.5px] text-lg font-medium text-grey')}
            key={menu?.id}
          >
            {menu?.name}

            {/* animation for switching the tab    */}
            {menu?.id === selectedForm && (
              <motion.span
                transition={{ type: 'spring', duration: 0.5 }}
                layoutId='tab'
                className='absolute inset-0 z-0  border-b-[3px]  border-primary font-bold '
              />
            )}
          </Link>
        ))}
      </div>

      <form className='form flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
        <CommonInput
          id='fullname'
          name='Full Name'
          type='text'
          errors={errors}
          placeholder='full name'
          // @ts-expect-error
          register={register}
        />
        <div className='flex flex-row  gap-6'>
          <CommonInput
            id='email'
            name='Email'
            type='email'
            placeholder='Enter your email address '
            // @ts-expect-error
            register={register}
            errors={errors}
          />
          <CommonInput
            id='number'
            name='Contact no'
            type='number'
            placeholder='Enter your contact no. '
            // @ts-expect-error
            register={register}
            errors={errors}
          />
        </div>
        {selectedForm === 'general_enquiry' && (
          <CommonInput
            id='subject'
            name='Subject of enquiry'
            type='text'
            placeholder='Enter subject  of enquiry '
            // @ts-expect-error
            register={register}
            errors={errors}
          />
        )}

        <CommonTextArea
          id='message'
          name={`${selectedForm === 'book_a_consulatation' ? 'Purpose to schedule a call' : 'Messages'}`}
          placeholder={` ${selectedForm === 'book_a_consulatation' ? 'Purpose to schedule a call' : 'Messages'} Enter your message`}
          // @ts-expect-error
          register={register}
          errors={errors}
        />
        {selectedForm === 'book_a_consulatation' && (
          <AvailableDate
            // @ts-expect-error
            register={register}
            errors={errors}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        )}

        {selectedForm !== 'book_a_consulatation' && (
          <CommonImage
            id='document'
            name='Upload document'
            // @ts-expect-error
            register={register}
            errors={errors}
          />
        )}

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
          onChange={onReCaptchaChange}
        />

        <button
          type='submit'
          className='btn -mt-10 w-fit rounded bg-primary px-4 py-[0.78125rem] font-medium text-white'
        >
          Send enquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
