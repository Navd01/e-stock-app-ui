import React, { Component } from "react";
import AddCompanyButton from "./Company/AddCompanyButton";
import CompanyTile from "./Company/CompanyTile";
import { connect } from "react-redux";
import { getAllCompanies } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllCompanies();
  }

  render() {
    const { companies } = this.props.company;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">E-Stock Application</h1>
              <br />
              <div className="row">
                <div className="col-md-8">
                  <AddCompanyButton />
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-8">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div className="col-md-1">
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <hr />

              {companies.map((company) => (
                <CompanyTile key={company.id} company={company} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  company: PropTypes.object.isRequired,
  getAllCompanies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  company: state.company,
});

export default connect(mapStateToProps, { getAllCompanies })(Dashboard);
