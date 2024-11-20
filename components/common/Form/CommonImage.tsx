import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form';
import { ImAttachment } from 'react-icons/im';

interface CommonImageProps {
  name: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
const CommonImage = ({ name, id, placeholder, register, errors }: CommonImageProps) => {
  return (
    <div className='form-group flex flex-col gap-2'>
      <label className='flex cursor-pointer flex-col gap-2' htmlFor={id}>
        <p className='flex flex-row gap-2 text-lg font-black text-mainBlack'>
          {name} <span className='font-medium text-primary '>Optional</span>
        </p>
        <p className='flex w-fit flex-row items-center gap-4 rounded bg-lightShad2 px-4 py-2.5 '>
          {' '}
          <span>
            <ImAttachment size={24} fill='#949494' />
          </span>
          <span className='text-grey'>Attach your files</span>
        </p>
        <span className='font-medium text-mainBlack'>
          Accepted file type <span className='text-primary'>.pdf, .docs</span> .
        </span>
      </label>
      <input
        type='file'
        id={id}
        accept='image/*'
        placeholder={placeholder}
        {...register(id)}
        className=' form-control hidden w-full bg-lightShad2 px-4 py-3 placeholder:text-grey'
      />
      {errors[id] && <span>{errors[id].message?.toString()}</span>}
    </div>
  );
};

export default CommonImage;

export const CommonDocument = ({ name, id, placeholder, register, errors }: CommonImageProps) => {
  return (
    <div className='form-group flex flex-col gap-2'>
      <label className='flex cursor-pointer flex-col gap-2' htmlFor={id}>
        <p className='flex flex-row gap-2 text-lg font-black text-mainBlack'>{name}</p>
        <p className='flex w-fit flex-row items-center gap-4 rounded bg-lightShad2 px-4 py-2.5 '>
          {' '}
          <span>
            <ImAttachment size={24} fill='#949494' />
          </span>
          <span className='text-grey'>Attach your files</span>
        </p>
        <span className='font-medium text-mainBlack'>
          Accepted file type <span className='text-primary'>.pdf, .docs</span> .
        </span>
        <span className='font-medium text-mainBlack'>
          Max file size <span className='text-primary'>5MB</span> .
        </span>
      </label>
      <input
        type='file'
        id={id}
        accept='.pdf, .doc, .docx'
        placeholder={placeholder}
        {...register(id)}
        className=' form-control hidden w-full bg-lightShad2 px-4 py-3 placeholder:text-grey'
      />
      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id].message?.toString()}</span>}
    </div>
  );
};
