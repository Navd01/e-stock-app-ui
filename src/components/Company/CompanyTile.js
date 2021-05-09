import React, { Component } from "react";
import AddStockModal from "../Layout/AddStockModal";
import DeleteCompanyModal from "../Layout/DeleteCompanyModal";
import { Link } from "react-router-dom";

class CompanyTile extends Component {
  render() {
    const { company } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{company.companyCode}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{company.companyName}</h3>
              <h5>CEO : {company.companyCEO}</h5>
              <p>The company Turnover is {company.companyTurnover}</p>
              <p>
                Company Website - <b>{company.companyWebsite}</b>
              </p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <AddStockModal
                  key={company.id}
                  companyCode={company.companyCode}
                />
                <Link to="/stockDetails">
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Veiw Stocks In Range</i>
                  </li>
                </Link>
                <DeleteCompanyModal
                  key={company.id}
                  companyCode={company.companyCode}
                />
              </ul>
            </div>

            <div className="col-2">
              <span className="mx-auto">
                <b>Latest Stock Price</b> - {company.latestStockPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CompanyTile;
