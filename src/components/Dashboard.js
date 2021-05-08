import React, { Component } from "react";
import AddCompanyButton from "./Company/AddCompanyButton";
import CompanyTile from "./Company/CompanyTile";
import { connect } from "react-redux";
import { getAllCompanies, getCompanyDetails } from "../actions/projectActions";
import PropTypes from "prop-types";
import classNames from "classnames";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchCompany: "",
      errors: {},
    };
  }
  componentDidMount() {
    this.props.getAllCompanies();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const companyCode = this.state.searchCompany;
    this.props.getCompanyDetails(companyCode, this.props.history);
  };

  render() {
    const { companies } = this.props.company;
    const { errors } = this.state;

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
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-md-8">
                        <input
                          className={classNames("form-control mr-sm-2 ", {
                            "is-invalid": errors.companyCode,
                          })}
                          type="input"
                          placeholder="Search"
                          aria-label="Search"
                          name="searchCompany"
                          value={this.state.searchCompany}
                          onChange={this.onChange}
                        />
                        {errors.companyCode && (
                          <div className="invalid-feedback">
                            {errors.companyCode}
                          </div>
                        )}
                      </div>
                      <div className="col-md-1">
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
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
  getCompanyDetails: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  company: state.company,
  errors: state.errors,
});

export default connect(mapStateToProps, { getAllCompanies, getCompanyDetails })(
  Dashboard
);
