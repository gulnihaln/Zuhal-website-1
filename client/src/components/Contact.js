import React, { useState, useEffect } from "react";
import "./styles/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function clearInput() {
    setName("");
    setContactNum("");
    setEmail("");
    setTopic("");
    setEnquiry("");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const mailerState = {
      name,
      contactNum,
      email,
      topic,
      enquiry,
    };

    const postObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(mailerState),
    };

    try {
      const response = await fetch("http://localhost:5000/send", postObject);
      const message = await response.json();
      if (response.status === 200) {
        setSuccessMsg(message.msg);
        clearInput();
      } else if (response.status === 400) {
        setSuccessMsg(message.msg);
      } else {
        setSuccessMsg(message.msg);
      }
    } catch (error) {
      setSuccessMsg(
        `Ooops!! Sorry, something went wrong. Check your Internet connection and try again later or you can contact me at
zuhalinfo@zuhalmakeup.com`
      );
    }
  }
  return (
    <>
      <section className="contact-page-main-container">
        <section className="contact-text-container">
          <h2 className="contact-header">Contact us</h2>
          <div className="border-box-bottom"></div>
          <p>
            Hi There, <br />I am looking forward to hearing from you. Please
            feel free to get in touch via the form below, I will get back to you
            as soon as possible.
            <br />
            <br />
            Zuhal Makeup Artist
          </p>
        </section>
        <section className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-info">
              {successMsg && (
                <div>
                  <h1>{successMsg}</h1>
                </div>
              )}
              <label htmlFor="name" className="form-label-text">
                Your Name
              </label>
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength="2"
              />
              <label htmlFor="phoneNumber" className="form-label-text">
                Contact Number
              </label>
              <input
                type="tel"
                className="form-input"
                id="phoneNumber"
                placeholder="0000 000 0000"
                required
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
                minLength="11"
              />
              <label htmlFor="email" className="form-label-text">
                Email address
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-option-container">
              <label htmlFor="text-area" className="form-label-text">
                Topic of enquiry
              </label>
              <select
                className="form-input"
                id="text-area"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Please Select</option>
                <option value="Bridal">Bridal Hair & Makeup</option>
                <option value="Evening Makeup">Evening Hair & Makeup</option>
                <option value="Day Makeup">Day Hair & Makeup</option>
                <option value="Covid-19">Covid-19</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-messagebox-container">
              <label htmlFor="Enquiry" className="form-label-text">
                Please type your enquiry in the area provided
              </label>
              <textarea
                className="form-input"
                id="Enquiry"
                rows="3"
                required
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                placeholder="Please type your enquiry"
              ></textarea>
            </div>
            <div className="btn-container">
              <button type="submit" className="button-primary-form">
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="contact-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4126.081761021525!2d7.715206033843513!3d48.06823365077311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479116d811b8255b%3A0x497aa1ecd4c99ddf!2sLa%20Speranza!5e0!3m2!1sen!2suk!4v1640799792587!5m2!1sen!2suk"
            title="Zulhal Makeup Salon"
            // height="250"
            // width="100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="map-frame"
          ></iframe>
        </section>
      </section>
    </>
  );
}
