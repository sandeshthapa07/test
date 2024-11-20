import { cn } from '@/utils/cn';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

interface IProps {
  isColumn?: boolean;
  isSecondaryButton?: boolean;
  chip: string;
  title: string;
  description: string;
  primarybuttonText: string;
  secondarybuttonText?: string;
  primarybuttonLink: string;
  secondarybuttonLink?: string;
  className?: string;
}

const ServiceCommonBanner = ({
  isColumn,
  isSecondaryButton,
  chip,
  title,
  description,
  primarybuttonText,
  primarybuttonLink,
  secondarybuttonText,
  secondarybuttonLink,
  className,
}: IProps) => {
  return (
    <div className={cn('flex flex-col gap-10', isColumn ? ' items-center' : ' ', className)}>
      <div className='flex flex-col gap-2'>
        <p
          className={cn(
            'text-center text-lg font-black  leading-[150%] tracking-[0.36px] text-primary lg:text-left',
            isColumn && 'text-center lg:text-center'
          )}
        >
          {chip?.charAt(0).toUpperCase() + chip?.slice(1)}
        </p>
        <CommonTitle title={title} className={isColumn ? 'text-center' : 'text-center lg:text-left'} />
      </div>
      <div className='flex flex-col gap-6'>
        <CommonParargraph text={description} className={isColumn ? 'text-center' : 'text-center lg:text-left'} />
        <div
          className={`flex flex-row flex-wrap items-center justify-center gap-6  ${isColumn ? 'justify-center' : 'lg:justify-start'}`}
        >
          <CommonButton href={primarybuttonLink} text={primarybuttonText} />
          {isSecondaryButton && (
            <CommonButton href={secondarybuttonLink as string} variant='secondary' text={secondarybuttonText} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCommonBanner;
