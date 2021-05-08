import React, { Component } from "react";

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
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">Add a Stock </i>
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Veiw Stocks In Range</i>
                  </li>
                </a>
                <a href="">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1">Delete Company</i>
                  </li>
                </a>
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
