import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CrushOfTheSensorModal = ({ show, onClose, typeOfSensor, cost }) => {
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
            <Modal.Title>
              ВНИМАНИЕ! Вышел из строя датчик <b>{typeOfSensor}</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Сумма на его починку - {cost} руб. - отражена в калькуляторе
            расходов. <br></br>
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

export default CrushOfTheSensorModal;
