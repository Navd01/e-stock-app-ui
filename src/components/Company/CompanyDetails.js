import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CompanyTile from "./CompanyTile";
import { Link } from "react-router-dom";

class CompanyDetails extends Component {
  render() {
    const { company } = this.props.company;

    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Company Details</h1>
                <br />
              </div>
              <div>
                <Link to="/Dashboard" className="btn btn-info">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <CompanyTile key={company.id} company={company} />
      </div>
    );
  }
}

CompanyDetails.propTypes = {
  company: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  company: state.company,
});

export default connect(mapStateToProps, null)(CompanyDetails);
