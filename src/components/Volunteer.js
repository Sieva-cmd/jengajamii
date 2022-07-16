const Volunteer = () => {
  return (
    <div>
      <form>
        <h3>Volunteer Form</h3>
        <div className="mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="Default input"
            aria-label="Full Names"
          />
        </div>
        <div class="mb-3 ">
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
              placeholder="email"
            />
          </div>
              </div>
              <div className="mb-3">
          <input
            class="form-control"
            type="number"
            placeholder="Default input"
            aria-label="Phone Number"
          />
        </div>
         <div className="mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="Default input"
            aria-label="Country"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Volunteer;
