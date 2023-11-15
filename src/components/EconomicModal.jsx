import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EconomicModal = ({ show, onClose, rashody }) => {
  const [resu, setresu] = useState(0);
  const [time, setTime] = useState(0);
  const [dop, setDop] = useState(0);

  const [energy, setEnergy] = useState(0);

  function count() {
    let tarif = 0.15;
    setresu(Number(time) * tarif + Number(rashody) + Number(dop));

    setEnergy(Number(time) * tarif);
  }
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
        <div class="ml-3">Тариф: 0.15 руб./мин.</div>
        <Modal.Body>
          Выполнить расчет текущих затрат на содержание СРВ:
          <Form>
            <Form.Control
              type="text"
              placeholder="Время эксплуатации системы, мин."
              class="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Расходы на ремонт оборудования, руб."
              className="mt-3"
              value={rashody}
            />
            <Form.Control
              type="text"
              placeholder="Дополнительные затраты, руб."
              className="mt-3"
              value={dop}
              onChange={(event) => setDop(event.target.value)}
            />
            <hr></hr>
            <button type="button" class="btn btn-danger" onClick={count}>
              Выполнить расчет
            </button>
            <hr></hr>
            <hr></hr>
            Затраты на электроэнергию, руб.:
            <input
              id="disabledInput"
              type="text"
              class="result"
              placeholder="Результат вычислений"
              value={energy}
              disabled
            />
            Общая сумма, руб.:
            <input
              id="disabledInput"
              type="text"
              class="result"
              placeholder="Результат вычислений"
              value={resu}
              disabled
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => onClose()}>
            Выход из калькулятора
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EconomicModal;
