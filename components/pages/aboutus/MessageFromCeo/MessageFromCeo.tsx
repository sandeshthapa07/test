import { fetchData } from '@/utils/getData';

import { type MessageFromCeoResponse } from '@/types/aboutus/banner';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonTitle from '@/components/common/CommonTitle';

import CeoMessage from './CeoMessage';

const MessageFromCeo = async () => {
  const { sectionTitle, message, messageTitle, bgImage, name } = await fetchData<MessageFromCeoResponse>(
    '/about-us/message-from-ceo-section'
  );
  return (
    <section className='common-padding mx-auto flex max-w-[1354px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem] '>
      <div className='flex flex-col items-center gap-2'>
        <CommonChip text={sectionTitle} />
        <CommonTitle title={messageTitle} className='text-center' />
      </div>
      <CeoMessage message={message} image={bgImage} name={name} />
    </section>
  );
};

export default MessageFromCeo;
