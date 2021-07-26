import { Fragment } from 'react';
import AboutUs from '../../pages/AboutUs';
import ContactUs from '../../pages/ContactUs';
import Hero from '../../pages/Hero';
import MeetTheTeam from '../../pages/MeetTheTeam';
import Services from '../../pages/Services';
import Footer from '../UI/Footer';
import NavBar from './navigation/NavBar';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <MeetTheTeam />
        <ContactUs />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
