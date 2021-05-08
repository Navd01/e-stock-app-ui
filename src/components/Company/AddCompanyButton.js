import React from "react";
import { Link } from "react-router-dom";

const AddCompanyButton = () => {
  return (
    <React.Fragment>
      <Link to="/addCompany" className="btn btn-lg btn-info">
        Add a Company
      </Link>
    </React.Fragment>
  );
};

export default AddCompanyButton;
