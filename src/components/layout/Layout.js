import { Fragment } from 'react';
import AboutUs from '../../pages/aboutUs/AboutUs';
import ContactUs from '../../pages/contactUs/ContactUs';
import Hero from '../../pages/hero/Hero';
import MeetTheTeam from '../../pages/meetTheTeam/MeetTheTeam';
import Services from '../../pages/services/Services';
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
