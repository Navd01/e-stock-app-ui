import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { addStock } from "../../actions/stockActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddStockModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      stock: "",
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = (e) => {
    const { companyCode } = this.props;
    console.log("This is compabyCode", companyCode);
    this.setState({ isOpen: false });
    e.preventDefault();
    const newStock = {
      stockPrice: this.state.stock,
    };
    this.props.addStock(newStock, companyCode);
  };

  render() {
    const { companyCode } = this.props;
    return (
      <div>
        <a onClick={this.openModal}>
          <li className="list-group-item board">
            <i className="fa fa-flag-checkered pr-1" style={{ color: "green" }}>
              Add a Stock{" "}
            </i>
          </li>
        </a>
        <Modal show={this.state.isOpen} onHide={this.closeModal} centered>
          <Modal.Header closeButton onClick={this.closeModal}>
            <Modal.Title>Add Stocks to {companyCode}</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.onSubmit}>
            <Modal.Body>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Stock"
                  name="stock"
                  value={this.state.stock}
                  onChange={this.onChange}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

AddStockModal.propTypes = {
  addStock: PropTypes.func.isRequired,
  stock: PropTypes.object.isRequired,
};

const mapStoreToProps = (state) => ({
  stock: state.stock,
});

export default connect(mapStoreToProps, { addStock })(AddStockModal);
