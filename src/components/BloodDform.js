import "./BloodDform.css";
const BloodDform = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-sm-7 col-lg-7">
          <form className="formDonation">
            <h3 style={{ marginTop: "5rem", marginBottom: "5rem" }}>
              Blood Donation Form
            </h3>
            <div className="mb-3">
            <label for="exampleDataList" class="form-label">
              Enter Name
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="Full Names"
                aria-label="Full Names"
              />
            </div>
            <div class="mb-3 ">
            <label for="exampleDataList" class="form-label">
                Enter Email
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  id="staticEmail"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="mb-3">
            <label for="exampleDataList" class="form-label">
                Enter phone number
              </label>
              <input
                class="form-control"
                type="number"
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
            </div>
            <div className="mb-3">
            <label for="exampleDataList" class="form-label">
              Location
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="County of resindence"
                aria-label="County"
              />
            </div>
            <div className="mb-3">
            <label for="exampleDataList" class="form-label">
              Hospital
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="Hospital"
                aria-label="Hospital"
              />
            </div>
            <div class="mb-3">
              <label for="exampleDataList" class="form-label">
                Blood Type
              </label>
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Blood Type"
              />
              <datalist id="datalistOptions">
                <option value="O+ve" />
                <option value="O-ve" />
                <option value="A" />
                <option value="B" />
                <option value="AB" />
                <option value="Not sure"/>
              </datalist>
            </div>
            <div className="mb-3">
            <label for="exampleDataList" class="form-label">
              Donation Date
              </label>
              <input
                class="form-control"
                type="date"
                placeholder="donation date"
                aria-label="donation date"
              />
            </div>
            <button
              className="submitBtn"
              type="submit"
              class="btn btn-primary"
              style={{
                backgroundColor: "#eb9309",
                width: "20rem",
                border: "1px solid #eb9309",
                borderRadius: "10px",
                color: "#000",
                fontWeight: "bold",
                marginLeft: "6rem",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BloodDform