import { useEffect, useState } from 'react';
import { applySchema } from '@/src/schemas/jobApplySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { CommonDocument } from '@/components/common/Form/CommonImage';
import { CommonInputV2 } from '@/components/common/Form/CommonInput';

const ApplyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(applySchema),
    mode: 'all',
  });

  const [showResume, setShowResume] = useState<boolean>(false);
  const [showCover, setShowCover] = useState<boolean>(false);
  const resumeFile: FileList | null = watch('resume') as FileList;
  const coverFile: FileList | null = watch('cover') as FileList;

  console.log(resumeFile, 'resumeFile');

  useEffect(() => {
    if (resumeFile && resumeFile?.length && !showResume) {
      setShowResume(true);
    }
    if (coverFile && coverFile?.length && !showCover) {
      setShowCover(true);
    }
  }, [resumeFile, showResume, coverFile, showCover]);

  const onSubmit = (data: unknown) => {
    console.log(data, 'data');
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className='flex w-full flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <CommonInputV2
        id='fullname'
        name='Full Name'
        type='text'
        errors={errors}
        placeholder='Full Name'
        // @ts-expect-error next-line
        register={register}
      />
      <div className='flex flex-col gap-4 xl:flex-row'>
        <div className='w-full'>
          <CommonInputV2
            id='email'
            name='Email'
            type='email'
            errors={errors}
            placeholder='Email'
            // @ts-expect-error next-line
            register={register}
          />
        </div>
        <div className='w-full'>
          <CommonInputV2
            id='number'
            name='Contact no'
            type='text'
            errors={errors}
            placeholder='Contact Number'
            // @ts-expect-error next-line
            register={register}
          />
        </div>
      </div>
      <div className='flex flex-col gap-4 xl:flex-row'>
        <div className='w-full'>
          {showResume ? (
            <div className='flex flex-row items-center gap-2'>
              <p className='text-primary'>{resumeFile?.[0]?.name}</p>
              <button
                onClick={() => {
                  setShowResume(false);
                  setValue('resume', '');
                }}
              >
                <IoClose />
              </button>
            </div>
          ) : (
            <CommonDocument
              id='resume'
              name='Resume'
              // @ts-expect-error next-line
              register={register}
              errors={errors}
            />
          )}
        </div>
        <div className='w-full'>
          {showCover ? (
            <div className='flex flex-row items-center gap-2'>
              <p className='text-primary'>{coverFile?.[0]?.name}</p>
              <button
                onClick={() => {
                  setShowCover(false);
                  setValue('cover', '');
                }}
              >
                <IoClose />
              </button>
            </div>
          ) : (
            <>
              <CommonDocument
                id='cover'
                name='Cover Letter'
                // @ts-expect-error next-line
                register={register}
                errors={errors}
              />
            </>
          )}
        </div>
      </div>
      <button type='submit' className='w-full rounded bg-primary px-4 py-3 text-white'>
        Submit
      </button>
    </form>
  );
};

export default ApplyForm;
