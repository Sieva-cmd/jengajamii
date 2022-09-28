import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <form className="formVolunteer">
            <h3 style={{marginTop:"5rem",marginBottom:"5rem"}}>Volunteer Form</h3>
            <div className="mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Full Names"
                aria-label="Full Names"
              />
            </div>
            <div class="mb-3 ">
              <div class="col-sm-10">
                <input
                  type="email"
                  id="staticEmail"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                class="form-control"
                type="number"
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
            </div>
            <div className="mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="County"
                aria-label="County"
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              style={{
                backgroundColor: "#eb9309",
                width: "20rem",
                border: "1px solid #eb9309",
                borderRadius: "10px",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Volunteer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Volunteer;
