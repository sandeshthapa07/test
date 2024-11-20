import { cn } from '@/utils/cn';

interface CommonChipProps {
  className?: string;

  text: string;
}

const CommonChip = ({ className, text }: CommonChipProps) => {
  return (
    <span
      className={cn(
        'chip w-fit rounded-lg bg-lightShade1 px-1.5 py-1 text-sm font-medium uppercase text-mainBlack',
        className
      )}
    >
      {text}
    </span>
  );
};

export default CommonChip;
