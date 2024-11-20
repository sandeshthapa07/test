import Link from 'next/link';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils/cn';

const buttonStyles = cva(
  ' w-fit whitespace-nowrap rounded px-4 py-[0.78125rem] text-lg leading-[1.6875rem] backdrop-blur-[7px] hover:shadow-[5px_4px_9px_0px_rgba(255,117,0,0.2)]', // Common styles
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: ' border-2 border-primary bg-transparent text-darkShade1',
      },
    },
    defaultVariants: {
      variant: 'primary', // Default to primary variant
    },
  }
);

interface CommonButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  text?: string;
  className?: string;
  href: string;
}

const CommonButton = ({ variant = 'primary', href, text = 'Contact us', className, ...props }: CommonButtonProps) => {
  return (
    <Link href={href} {...props} className={cn(buttonStyles({ variant }), className)} scroll={false}>
      {text}
    </Link>
  );
};

export default CommonButton;
