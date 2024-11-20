import { cn } from '@/utils/cn';

const TitleParaWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex flex-col items-center gap-8', className)}>{children}</div>;
};

export default TitleParaWrapper;
