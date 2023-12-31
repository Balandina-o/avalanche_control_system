import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css_components/EconomicModal.module.css";

const EconomicModal = ({ show, onClose, rashody, price, priceMass }) => {
  const [resu, setresu] = useState(0);
  const [time, setTime] = useState(0);
  const [dop, setDop] = useState(0);

  const [sum, setSum] = useState(0);

  const [energy, setEnergy] = useState(0);

  React.useEffect(() => {
    setSum(priceMass.reduce((partialSum, a) => partialSum + a, 0));
    //alert(sum);
  }, [priceMass]);

  function count() {
    let tarif = 0.15;
    setresu(Number(time) * tarif + Number(rashody) + Number(sum));

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
          <Modal.Title>Расчет экономических затрат</Modal.Title>
        </Modal.Header>
        <div class="ml-3">Тариф: 0.15 руб./мин.</div>
        <Modal.Body>
          <label for="name">
            {" "}
            <b>Выполнить расчет текущих затрат на содержание СРВ:</b>
          </label>

          <Form>
            <div class="bruh" style={{ display: "flex" }}>
              <label for="name">Время эксплуатации системы, мин.:</label>
              <Form.Control
                type="text"
                placeholder="Время эксплуатации системы, мин."
                class="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
            <div class="bruh" style={{ display: "flex" }}>
              <label for="name">
                Расходы на ремонт оборудования из-за схода лавины, руб.
              </label>
              <Form.Control
                type="text"
                placeholder="Расходы на ремонт оборудования, руб."
                className="mt-3"
                value={rashody}
              />
            </div>
            <div class="bruh" style={{ display: "flex" }}>
              <label for="name">
                Расходы на починку вышедних из строя в ходе эксплуатации
                датчиков, руб.
              </label>
              <Form.Control
                type="text"
                placeholder="Дополнительные затраты, руб."
                className="mt-3"
                value={sum}
              />
            </div>
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
