import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const YagamiLightModal = ({ show, onClose, please, periodTimeMass }) => {
  React.useEffect(() => {
    console.log("ready");

    setTimeout(function () {
      please();
      onClose();
    }, 5000);
  }, [please, onClose, periodTimeMass.length]);

  return (
    <div>
      <div>
        <Modal
          show={show}
          onHide={() => onClose()}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>ВНИМАНИЕ! Отключение электричества</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Выполняется переход на резервный источник питания...<br></br>
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden"></span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => onClose()}>
              Закрыть окно
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default YagamiLightModal;
