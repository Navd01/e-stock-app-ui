import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStockDetails } from "../../actions/stockActions";
import StockTable from "../Layout/StockTable";

class StockDetails extends Component {
  constructor() {
    super();

    this.state = {
      fromDate: "",
      toDate: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const { companyCode } = this.props.match.params;
    e.preventDefault();
    this.props.getStockDetails(
      companyCode,
      this.state.fromDate,
      this.state.toDate
    );
  };
  render() {
    const { companyCode } = this.props.match.params;
    const { stocks } = this.props.data;
    console.log("These are Stocks", stocks);
    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Stock Details</h1>
                <br />
              </div>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <h6>From Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="fromDate"
                      value={this.state.fromDate}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h6>To Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="toDate"
                      value={this.state.toDate}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-offset-6 ">
                    <Button variant="primary" type="submit" size="lg">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />

        <StockTable key={companyCode} stocks={stocks} />
      </div>
    );
  }
}

StockDetails.propTypes = {
  data: PropTypes.object.isRequired,
  getStockDetails: PropTypes.func.isRequired,
};

const mapStoreToProps = (state) => ({
  data: state.stock.stock,
});

export default connect(mapStoreToProps, { getStockDetails })(StockDetails);
