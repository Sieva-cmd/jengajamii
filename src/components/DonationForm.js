import "./DonationForm.css"

const Donation = () => {
  return (
      <div className="container">
          <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6">
                 <h3>Donation Form</h3>
              <form>
             
          <div class="mb-3">
          <label for="exampleDataList" class="form-label">
            Donate to
          </label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="School" />
            <option value="Childrens Home" />
            <option value="Prisons" />
            <option value="Marginalised groups" />
            
          </datalist>
        </div>
        <div class="mb-3">
          <label for="exampleDataList" class="form-label">
            What to Donate
          </label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="Food" />
            <option value="Clothes" />
            <option value="Sanitary pads" />
            <option value="School stationery" />
            <option value="Money" />
          </datalist>
        </div>

        <div class="mb-3">
          <label for="formFile" class="form-label">
            upload Image
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="click to donate money"
            aria-label="default input example"
          />
        </div>

        <button className="submitBtn" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
              </div>
          </div>
       
    </div>
  );
};
export default Donation;
