import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteCompany } from "../../actions/projectActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DeleteCompanyModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  onSubmit = (e) => {
    const { companyCode } = this.props;
    this.setState({ isOpen: false });
    e.preventDefault();

    this.props.deleteCompany(companyCode);
  };

  render() {
    const { companyCode } = this.props;
    return (
      <div>
        <a href="# " onClick={this.openModal}>
          <li className="list-group-item board">
            <i className="fa fa-flag-checkered pr-1" style={{ color: "red" }}>
              Delete Company{" "}
            </i>
          </li>
        </a>
        <Modal show={this.state.isOpen} onHide={this.closeModal} centered>
          <Modal.Header closeButton onClick={this.closeModal}>
            <Modal.Title>Deleting {companyCode}</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.onSubmit}>
            <Modal.Body>Are you sure you wanna do this?</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" type="submit">
                Delete
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

DeleteCompanyModal.propTypes = {
  deleteCompany: PropTypes.func.isRequired,
};

export default connect(null, { deleteCompany })(DeleteCompanyModal);
