import InfoHeader from './InfoHeader';
import MainHeader from './MainHeader';
import VacancyHeader from './services/VacancyHeader';

const Header = () => {
  return (
    <header className='header'>
      <VacancyHeader />
      <InfoHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
