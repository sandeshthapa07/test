import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';

const ContactSection = () => {
  return (
    <div className='contact-section flex flex-col items-center justify-center gap-9 bg-lightShad2 px-6 py-14 md:p-20 xl:gap-14 xl:py-28'>
      <ContactMap />
      <ContactInfo />
    </div>
  );
};

export default ContactSection;
