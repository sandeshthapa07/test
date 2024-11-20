import { cn } from '../../utils/cn';

interface CommonTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
}

const CommonTitle = ({ className, title }: CommonTitleProps) => {
  return (
    <h2
      className={cn(
        'titlelineheight text-2xl font-black leading-[2.5rem_!important] text-mainBlack xsm:text-[2rem]  xmd:text-[2.5rem]  lg:text-5xl lg:leading-[3.78rem_!important]  ',
        className
      )}
    >
      {title?.charAt(0)?.toUpperCase() + title?.slice(1)}
    </h2>
  );
};

export default CommonTitle;

export const CommonHeader = ({ className, title }: CommonTitleProps) => {
  return (
    <h3 className={cn('text-lg font-bold  text-mainBlack  ', className)}>
      {title?.charAt(0).toUpperCase() + title?.slice(1)}
    </h3>
  );
};
