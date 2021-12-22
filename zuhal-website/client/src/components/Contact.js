export default function Contact() {
  return (
    <form
      style={{
        width: "400px",
        margin: "auto",
        placeItems: "center",
      }}
    >
      <div className="form-row align-items-center">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your Name"
        />
        <label htmlFor="phoneNumber">Contact Number</label>
        <input
          type="number"
          className="form-control"
          id="phoneNumber"
          placeholder="name@example.com"
        />
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-row align-items-center">
        <label htmlFor="text-area">Topic of enquiry</label>
        <select className="form-control" id="text-area">
          <option>Please Select</option>
          <option>Bridal Hair & Makeup</option>
          <option>Evening Hair & Makeup</option>
          <option>Day Hair and Makeup</option>
          <option>Covid19</option>
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
