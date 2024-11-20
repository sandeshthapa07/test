import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

interface IProps {
  title: string;
  description: string;
  href: string;
  linkTitle: string;
}

const PageDetail = ({ title, description, href, linkTitle }: IProps) => {
  return (
    <div className='pageinfo main-common-padding flex max-w-[1000px] flex-col items-center gap-8'>
      <CommonTitle title={title} className='text-center' />
      <div>
        <Image src='/deletable/banner1.jpeg' alt='arrow' width={532} height={364} className='rounded-2xl' />
      </div>
      <CommonParargraph text={description} className='text-center' />
      <CommonButton text={linkTitle} href={href} className='mx-auto' />
    </div>
  );
};

export default PageDetail;
