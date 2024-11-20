import { cn } from '@/utils/cn';
import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form';

interface CommonTextAreaProps {
  name: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const CommonTextArea = ({ name, id, placeholder, register, errors }: CommonTextAreaProps) => {
  return (
    <div className='form-group flex flex-col gap-2'>
      <label htmlFor={id} className='text-lg font-black text-mainBlack'>
        {name}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        {...register(id)}
        className={cn(
          'form-control w-full rounded bg-lightShad2 px-4 py-3 placeholder:text-grey ',
          errors[id] && 'border border-error'
        )}
      />
      <span className='text-sm font-medium text-error'>
        <>{errors[id]?.message}</>
      </span>
    </div>
  );
};

export default CommonTextArea;
