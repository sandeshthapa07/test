import { cn } from '@/utils/cn';

const TitleChipWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex flex-col items-center gap-2', className)}>{children}</div>;
};

export default TitleChipWrapper;
