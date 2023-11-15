import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartComponent from "./ChartComponent";

const EconomicModal = ({ show, onClose }) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={() => onClose()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Расчет экономической эффективности</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Выполнить расчет текущих затрат на эксплуатацию СРВ:
          <Form>
            <Form.Control
              type="text"
              placeholder="Расходы на электричество"
              className="mt-3"
            />
            <Form.Control
              type="text"
              placeholder="Описание теста"
              className="mt-3"
            />
            <Form.Control
              type="text"
              placeholder="Расходы на ремонт оборудования"
              className="mt-3"
              value={"10000"}
            />
            <hr></hr>
            <hr></hr>
            <hr></hr>
            Результат вычислений:
            <input
              class="form-control"
              id="disabledInput"
              type="text"
              placeholder="Результат вычислений"
              disabled
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Выход из калькулятора
          </Button>
          <Button variant="primary" onClick={() => onClose()}>
            Выполнить расчет
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EconomicModal;
