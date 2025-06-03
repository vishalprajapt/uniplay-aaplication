import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Logout.css";

const LogoutModal = ({ show, onHide, onLogout }) => {
  const handleLogout = () => {
    onLogout();
    setTimeout(() => {
      onHide();
    }, 1500);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="custom-logout-modal"
      backdrop="static"
    >
      <div className="logout-modal-body text-center">
        <h4 className="mb-3">Logout</h4>
        <p className="mb-4">Are you sure you want to log out from this account?</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="secondary" onClick={onHide} className="w-50">
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout} className="w-50">
            Logout
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
