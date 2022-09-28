import "./DonationForm.css";

const Donation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-sm-7 col-lg-7">
          <form className="formDonation">
            <h3 style={{ marginTop: "5rem", marginBottom: "5rem" }}>
              Donation Form
            </h3>
            <div class="mb-3">
              <label for="exampleDataList" class="form-label">
                Donate to
              </label>
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Donate To..."
              />
              <datalist id="datalistOptions">
                <option value="schools" />
                <option value="orphanages" />
                <option value="prison" />
                <option value="society" />
                <option value="hospitals " />
                <option value="refugees"/>
              </datalist>
            </div>
            <div class="mb-3">
              <label for="exampleDataList" class="form-label">
                What to Donate
              </label>
              <input
                class="form-control"
                list="datalistOptions2"
                id="exampleDataList2"
                placeholder="Donation Type"
              />
              <datalist id="datalistOptions2">
                <option value="Food" />
                <option value="Clothes" />
                <option value="Sanitary pads" />
                <option value="School stationery" />
                <option value="Money" />
              </datalist>
            </div>
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
export default Donation;
