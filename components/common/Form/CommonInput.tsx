import { cn } from '@/utils/cn';
import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form';

interface CommonInputProps {
  type: string;
  placeholder?: string;
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const CommonInput = ({ id, name, type, placeholder, register, errors }: CommonInputProps) => {
  return (
    <div className='form-group flex w-full flex-col gap-2'>
      <label className='text-lg font-black text-mainBlack' htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        className={cn(
          'form-control w-full rounded bg-lightShad2 px-4 py-3 placeholder:text-grey focus:border focus:border-lightShad2 ',
          errors[id] && 'border border-error'
        )}
        id={id}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        {...register(id)}
      />

      {errors[id] && (
        <span className='text-sm font-medium text-error'>
          <>{errors[id].message}</>
        </span>
      )}
    </div>
  );
};

export default CommonInput;

export const CommonInputV2 = ({ id, name, type, placeholder, register, errors }: CommonInputProps) => {
  return (
    <div className='form-group flex w-full flex-col gap-2'>
      <label className='text-lg font-black text-mainBlack' htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        className={cn(
          'form-control w-full rounded bg-white px-4 py-3 placeholder:text-grey focus:border focus:border-lightShad2 ',
          errors[id] && 'border border-error'
        )}
        id={id}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        {...register(id)}
      />

      {errors[id] && (
        <span className='text-sm font-medium text-error'>
          <>{errors[id].message}</>
        </span>
      )}
    </div>
  );
};
