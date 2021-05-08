import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CompanyTile from "./CompanyTile";

class ProjectDetails extends Component {
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
            </div>
          </div>
        </div>
        <hr />
        <CompanyTile key={company.id} company={company} />
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  company: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  company: state.company,
});

export default connect(mapStateToProps, null)(ProjectDetails);
