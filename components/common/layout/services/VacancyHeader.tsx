import Link from 'next/link';

const VacancyHeader = () => {
  return (
    <div className='flex flex-row gap-1 bg-primary px-6 py-2 text-white xmd:px-16 xl:px-[6.25rem] 3xl:px-[9.375rem]'>
      <p>We are actively hiring for different positions please visit our career page to</p>
      <Link href='/career' className='underline'>
        join us
      </Link>
    </div>
  );
};

export default VacancyHeader;
