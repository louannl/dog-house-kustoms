import classes from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form>
      <h2>Contact Us</h2>
      <div className={classes.formContents}>
        <div>
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name here"
          />
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your last name here"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email here" />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Enter your phone here" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            rows="6"
            id="message"
            placeholder="Enter your message here"
          ></textarea>
        </div>
      </div>
      <div className={classes.submitButton}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
