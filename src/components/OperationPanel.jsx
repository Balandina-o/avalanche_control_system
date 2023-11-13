import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartComponent from "./ChartComponent";
import EconomicModal from "./EconomicModal";
import AvalancheModal from "./AvalancheModal";

const OperationPanel = observer(() => {
  const [currentState, setcurrentState] = useState(false);

  const [period, setPeriod] = useState("500");
  const [firstValue, setFirstValue] = useState("10");
  const [secondValue, setSecondValue] = useState("12");
  const [bar, setBar] = useState("10");
  const [temp, setTemp] = useState("0");

  const [showCreateEconomicModal, setShowCreateEconomicModal] = useState();

  const [showCreateAvalancheModal, setShowCreateAvalancheModal] = useState();

  function trigger() {
    setShowCreateAvalancheModal(true);
    setcurrentState(true);
    setFirstValue(1);
    setSecondValue(30);
    setPeriod(100);
    setBar(100);
    setTemp(Math.floor(Math.random() * -10));
  }
  function avalanche() {
    //
    //
    //
    setcurrentState(true);
    setFirstValue(1);
    setSecondValue(30);
    setPeriod(100);
    setBar(100);
    setTemp(Math.floor(Math.random() * -10));
  }

  function peace() {
    setcurrentState(false);
    setFirstValue(10);
    setSecondValue(12);
    setPeriod(500);
    setBar(10);
    setTemp(0);
  }

  function stop() {
    setcurrentState(false);
    setFirstValue(0);
    setSecondValue(0);
    setPeriod(499);
  }

  function exit() {}

  return (
    <div class="main_div d-flex flex-row">
      <div className="container-fluid">
        <div className="row flex no-wrap">
          <div className="bg-secondary col-auto col-md-4 min-vh-100">
            <ul class="nav nav-pills flex-column">
              <div class="col text-center mt-5">
                <li class="nav-item text-white fs-4">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={trigger}
                  >
                    Критические значения
                  </button>
                </li>
                <li class="nav-item text-white mt-2">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={avalanche}
                  >
                    Лавина не контр.
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-2">
                  <button type="button" class="btn btn-light" onClick={peace}>
                    Нормальное состояние
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-2">
                  <button type="button" class="btn btn-light" onClick={stop}>
                    Приостановить
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-4">
                  <button type="button" class="btn btn-light" onClick={stop}>
                    Частотa отслеж. +
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-2">
                  <button type="button" class="btn btn-light" onClick={stop}>
                    Частотa отслеж. -
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={() => setShowCreateEconomicModal(true)}
                  >
                    Экономич. эфф.
                  </button>
                </li>
              </div>
            </ul>
          </div>
          <div class="">
            dfdfdfdfdfddddddddddddddddddddddddddddddddddddddddddddddd
          </div>
        </div>
      </div>

      <div>
        {/* {currentState ? (
          <img
            width="500px"
            //src={require("../icons/111.gif")}
            class="mt-2"
          ></img>
        ) : (
          <img
            width="500px"
            src={require("../icons/222.gif")}
            class="mt-2"
          ></img>
        )} */}
        {temp}
      </div>
      <div>
        <ChartComponent
          period={period}
          firstValue={firstValue}
          secondValue={secondValue}
          bar={bar}
        />
      </div>
      <div>
        <EconomicModal
          show={showCreateEconomicModal}
          onClose={() => setShowCreateEconomicModal(false)}
        >
          {" "}
        </EconomicModal>

        <AvalancheModal
          show={showCreateAvalancheModal}
          onClose={() => setShowCreateAvalancheModal(false)}
        >
          {" "}
        </AvalancheModal>
      </div>
    </div>
  );
});

export default OperationPanel;
