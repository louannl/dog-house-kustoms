import { Element } from 'react-scroll';
import Content from '../components/UI/Content';
import classes from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section>
      <Element name="Contact-us">
        <Content className={classes.content}>
          <h2>Contact us</h2>
          <form action="#" class="contact-form">
            <ul class="flex-outer">
              <li>
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter your first name here"
                />
              </li>
              <li>
                <label for="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter your last name here"
                />
              </li>
              <li>
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email here"
                />
              </li>
              <li>
                <label for="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone here"
                />
              </li>
              <li>
                <label for="message">Message</label>
                <textarea
                  rows="6"
                  id="message"
                  placeholder="Enter your message here"
                ></textarea>
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </Content>
      </Element>
    </section>
  );
};

export default ContactUs;
