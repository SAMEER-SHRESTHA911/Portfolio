import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_d5xcshv', 'template_hq3wf2k', form.current, {
  //       publicKey: 'DWlAPtnZB-1kcDFSp',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         console.log(message);
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     )};
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
        </p>
      </div>
      {/* <form ref ={form} className="contact--form--container" onSubmit={sendEmail}> */}
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label" name="first_name">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label" name="last_name">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label" name="email">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label" name="phone">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label" name="message">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button type="submit" value="Send" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
        <div className="samir_contact">
        <h3>Or Contact me at samirstha2002@gmail.com</h3>
      </div>
      </form>
    </section>
  );
}

