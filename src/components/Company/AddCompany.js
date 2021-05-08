import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCompany } from "../../actions/projectActions";
import classNames from "classnames";

class AddCompany extends Component {
  constructor() {
    super();

    this.state = {
      companyName: "",
      companyCode: "",
      companyCEO: "",
      companyTurnover: "",
      companyWebsite: "",
      stockExchange: "",
      latestStockPrice: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newCompany = {
      companyName: this.state.companyName,
      companyCode: this.state.companyCode,
      companyCEO: this.state.companyCEO,
      companyTurnover: this.state.companyTurnover,
      companyWebsite: this.state.companyWebsite,
      stockExchange: this.state.stockExchange,
    };

    this.props.addCompany(newCompany, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Add Company form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg ", {
                      "is-invalid": errors.companyName,
                    })}
                    placeholder="Company Name"
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.onChange}
                  />
                  {errors.companyName && (
                    <div className="invalid-feedback">{errors.companyName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg ", {
                      "is-invalid": errors.companyCode,
                    })}
                    placeholder="Unique Company Code"
                    name="companyCode"
                    value={this.state.companyCode}
                    onChange={this.onChange}
                  />
                  {errors.companyCode && (
                    <div className="invalid-feedback">{errors.companyCode}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg ", {
                      "is-invalid": errors.companyCEO,
                    })}
                    placeholder="Company CEO"
                    name="companyCEO"
                    value={this.state.companyCEO}
                    onChange={this.onChange}
                  />
                  {errors.companyCEO && (
                    <div className="invalid-feedback">{errors.companyCEO}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg ", {
                      "is-invalid": errors.companyTurnover,
                    })}
                    placeholder="Company TurnOver"
                    name="companyTurnover"
                    value={this.state.companyTurnover}
                    onChange={this.onChange}
                  />
                  {errors.companyTurnover && (
                    <div className="invalid-feedback">
                      {errors.companyTurnover}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg ", {
                      "is-invalid": errors.companyWebsite,
                    })}
                    placeholder="Company Website"
                    name="companyWebsite"
                    value={this.state.companyWebsite}
                    onChange={this.onChange}
                  />
                  {errors.companyWebsite && (
                    <div className="invalid-feedback">
                      {errors.companyWebsite}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg ", {
                      "is-invalid": errors.stockExchange,
                    })}
                    placeholder="Stock Exchange"
                    name="stockExchange"
                    value={this.state.stockExchange}
                    onChange={this.onChange}
                  />
                  {errors.stockExchange && (
                    <div className="invalid-feedback">
                      {errors.stockExchange}
                    </div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddCompany.propTypes = {
  addCompany: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addCompany })(AddCompany);
