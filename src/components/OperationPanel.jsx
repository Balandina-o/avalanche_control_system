import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartComponent from "./ChartComponent";

const OperationPanel = observer(() => {
  const [currentState, setcurrentState] = useState(false);

  const [period, setPeriod] = useState("500");
  const [firstValue, setFirstValue] = useState("10");
  const [secondValue, setSecondValue] = useState("12");

  function trigger() {
    setcurrentState(true);
    setFirstValue(1);
    setSecondValue(30);
    setPeriod(100);
  }

  function peace() {
    setcurrentState(false);
    setFirstValue(10);
    setSecondValue(12);
    setPeriod(500);
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
        <div className="row">
          <div className="bg-dark col-auto col-md-2 min-vh-100 position-absolute">
            <ul class="nav nav-pills flex-column">
              <div class="col text-center mt-2">
                <li class="nav-item text-white fs-4">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={trigger}
                  >
                    Аварийное состояние
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
                <li class="nav-item text-white fs-4 mt-5">
                  <button type="button" class="btn btn-light" onClick={exit}>
                    Выход из СРВ
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div>
        {currentState ? (
          <img
            width="500px"
            src={require("../icons/111.gif")}
            class="mt-2"
          ></img>
        ) : (
          <img
            width="500px"
            src={require("../icons/222.gif")}
            class="mt-2"
          ></img>
        )}
      </div>
      <div>
        <ChartComponent
          period={period}
          firstValue={firstValue}
          secondValue={secondValue}
        />
      </div>
    </div>
  );
});

export default OperationPanel;
