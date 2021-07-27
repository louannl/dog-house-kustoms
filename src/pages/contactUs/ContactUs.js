import { Element } from 'react-scroll';
import Content from '../../components/UI/Content';
import ContactForm from '../../components/UI/form/ContactForm';

const ContactUs = () => {
  return (
    <section>
      <Element name="contact-us">
        <Content>
          <ContactForm />
        </Content>
      </Element>
    </section>
  );
};

export default ContactUs;
