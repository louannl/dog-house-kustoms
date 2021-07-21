import { Fragment } from 'react';
import AboutUs from '../../pages/AboutUs';
import ContactUs from '../../pages/ContactUs';
import Hero from '../../pages/Hero';
import Services from '../../pages/Services';
import NavBar from './navigation/NavBar';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <ContactUs />
      </main>
    </Fragment>
  );
};

export default Layout;
