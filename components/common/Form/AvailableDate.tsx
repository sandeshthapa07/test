import { type Dispatch, type SetStateAction } from 'react';

import 'react-calendar/dist/Calendar.css';

import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';

import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

export interface IProps {
  register: UseFormRegister<{
    timeId: number;
  }>;
  errors: FieldErrors<{
    timeId: number;
  }>;
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
}

const slotData: {
  id: number;
  time: string;
}[] = [
  {
    id: 1,
    time: '10:00 - 11:00',
  },
  {
    id: 2,
    time: '11:00 - 12:00',
  },
  {
    id: 3,
    time: '12:00 - 13:00',
  },
  {
    id: 4,
    time: '13:00 - 14:00',
  },
  {
    id: 5,
    time: '14:00 - 15:00',
  },
];

const AvailableDate = ({ register, errors, startDate, setStartDate }: IProps) => {
  const onChange = (date: Date | null): void => {
    if (date !== null) {
      setStartDate(date);
    }
  };
  const today = new Date();

  // Set the day to tomorrow
  const tomorrowDate = new Date(today);
  // const isoDate = tomorrowDate.setDate(today.getDate() + 1);

  return (
    <div className='flex flex-col gap-10'>
      <section className='flex flex-col gap-2'>
        <p className='text-lg font-black text-mainBlack '>Please select a date</p>
        <DatePicker
          onChange={(date) => onChange(date as Date)}
          value={startDate}
          minDate={tomorrowDate}
          className='rounded px-4 py-3 text-mainBlack'
        />
      </section>

      <div className='time'>
        <div className='timeslot flex flex-col gap-2'>
          <p className='text-lg font-black text-mainBlack '>Available time slots</p>

          <div className='grid grid-cols-2 gap-6 '>
            {slotData?.length < 1 ? (
              <p className='col-span-2 font-medium text-error'>Sorry! there are no available slots for today.</p>
            ) : (
              <>
                {slotData?.map((slot) => {
                  return (
                    <div className='flex cursor-pointer gap-3' key={slot?.id}>
                      <input
                        type='radio'
                        id={slot?.time}
                        value={slot?.id.toString()}
                        className='size-6 cursor-pointer'
                        {...register('timeId')}
                      />
                      <label htmlFor={slot?.time} className='font-medium text-mainBlack '>
                        {slot?.time}
                      </label>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          {errors[`timeId`] && (
            <span className='text-sm font-normal text-error'>{errors[`timeId`].message as string}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableDate;
