import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

import { cn } from '../../utils/cn';

interface CommonParargraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  className?: string;
}
const CommonParargraph = ({ text, className }: CommonParargraphProps) => {
  return (
    <p className={cn('font-medium text-mainBlack  xmd:text-lg  ', className)}>
      {text?.charAt(0).toUpperCase() + text?.slice(1)}
    </p>
  );
};

export default CommonParargraph;

export const SocialMedia = () => {
  return (
    <div className='flex flex-row items-center gap-6'>
      <a href='https://www.facebook.com/aitcinternational' target='_blank'>
        <FaFacebook size={24} />
      </a>
      <a href='https://www.instagram.com/aitcinternational/' target='_blank'>
        <FaInstagramSquare size={24} />
      </a>
      <a href='https://www.linkedin.com/company/aitc-international-private-limited' target='_blank'>
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};
