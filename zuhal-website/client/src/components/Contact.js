export default function Contact() {
  return (
    <form
      style={{
        width: "400px",
        margin: "auto",
        placeItems: "center",
      }}
    >
      <div class="form-row align-items-center">
        <label for="name">Your Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Your Name"
        />
        <label for="phoneNumber">Contact Number</label>
        <input
          type="number"
          class="form-control"
          id="phoneNumber"
          placeholder="name@example.com"
        />
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="form-row align-items-center">
        <label for="text-area">Topic of enquiry</label>
        <select class="form-control" id="text-area">
          <option>Please Select</option>
          <option>Bridal Hair & Makeup</option>
          <option>Evening Hair & Makeup</option>
          <option>Day Hair and Makeup</option>
          <option>Covid19</option>
        </select>
      </div>

      <div class="form-row align-items-center">
        <label for="Enquiry">
          Please type your enquiry in the area provided
        </label>
        <textarea class="form-control" id="Enquiry" rows="3"></textarea>
      </div>

      <div class="col-auto my-1">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
