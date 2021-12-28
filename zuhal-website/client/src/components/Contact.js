import React, { useState } from "react";
export default function Contact() {
  function useFormState(initial) {
    const [state, setState] = useState(initial);

    function setEvent(e) {
      setState(e.target.value);
    }
    return [state, setEvent];
  }
  const [name, setName] = useFormState("");
  const [contactNum, setContactNum] = useFormState("");
  const [email, setEmail] = useFormState("");
  const [topic, setTopic] = useFormState("");
  const [enquery, setEnquery] = useFormState("");
  const [successMsg, setSuccessMsg] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const mailerState = {
      name,
      contactNum,
      email,
      topic,
      enquery,
    };

    const postObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(mailerState),
    };
    setSuccessMsg("Your Message was Received");

    const response = await fetch("http://localhost:5000/send", postObject);
    console.log(`response`, response);
  }
  return (
    <form
      style={{
        width: "400px",
        margin: "auto",
        placeItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div className="form-row align-items-center">
        {successMsg && (
          <div>
            <h1>{successMsg}</h1>
          </div>
        )}
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your Name"
          required
          onChange={setName}
          minLength="2"
        />
        <label htmlFor="phoneNumber">Contact Number</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          placeholder="123 456 7890"
          required
          onChange={setContactNum}
          minLength="11"
        />
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          required
          onChange={setEmail}
        />
      </div>
      <div className="form-row align-items-center">
        <label htmlFor="text-area">Topic of enquiry</label>
        <select className="form-control" id="text-area" onChange={setTopic}>
          <option>Please Select</option>
          <option value="Bridal">Bridal Hair & Makeup</option>
          <option value="Evening Makeup">Evening Hair & Makeup</option>
          <option value="Day Makeup">Day Hair & Makeup</option>
          <option value="Covid-19">Covid-19</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-row align-items-center">
        <label htmlFor="Enquiry">
          Please type your enquiry in the area provided
        </label>
        <textarea
          className="form-control"
          id="Enquiry"
          rows="3"
          required
          onChange={setEnquery}
          placeholder="Please type your enquiry"
        ></textarea>
      </div>

      <div className="col-auto my-1">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
