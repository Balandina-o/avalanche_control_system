import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartComponent from "./ChartComponent";
import EconomicModal from "./EconomicModal";
import AvalancheModal from "./AvalancheModal";
import PressureChart from "./PressureChart";
import TimeMaster from "./TimeMaster";
import YagamiLightModal from "./YagamiLightModal";

const OperationPanel = observer(() => {
  const [onOrOff, setonOrOff] = useState("true");

  const [period, setPeriod] = useState("500");
  const [firstValue, setFirstValue] = useState("10");
  const [secondValue, setSecondValue] = useState("12");
  const [barMin, setBarMin] = useState("5");
  const [barMax, setBarMax] = useState("15");
  const [temp, setTemp] = useState("0");

  const [rashody, setRashody] = useState("0");

  const [showCreateEconomicModal, setShowCreateEconomicModal] = useState();
  const [showCreateAvalancheModal, setShowCreateAvalancheModal] = useState();
  const [showCreateYagamiLightModal, setShowCreateYagamiLightModal] =
    useState();

  const [yagami, setYagami] = useState(0);

  const [massMin, setMassMin] = useState(0);
  const [massMax, setMassMax] = useState(0);

  function trigger() {
    setShowCreateAvalancheModal(true);
    setFirstValue(25);
    setSecondValue(15);
    setonOrOff(true);

    setRashody(0);
    setBarMin(5);
    setBarMax(25);
    setTemp(Math.floor(Math.random() * (1 + 3) - 3));

    setMassMin(250);
    setMassMax(300);
    setYagami(0);
  }
  function avalanche() {
    setFirstValue(50);
    setSecondValue(20);
    setonOrOff(true);

    setRashody(100000);
    setBarMin(100);
    setBarMax(150);
    setTemp(Math.floor(Math.random() * (1 + 3) - 3));

    setMassMin(250);
    setMassMax(500);
    setYagami(0);
  }

  function peace() {
    setFirstValue(15);
    setSecondValue(5);
    setonOrOff(true);

    setRashody(0);
    setBarMin(1);
    setBarMax(5);
    setTemp(-1 * Math.floor(Math.random() * (30 - 10) + 10));

    setMassMin(150);
    setMassMax(200);
    setYagami(0);
  }

  function stop() {
    setFirstValue(0);
    setSecondValue(0);

    setMassMin(0);
    setMassMax(0);
    setonOrOff(false);
  }

  function faster() {
    setPeriod(period - 100);
  }

  function slower() {
    setPeriod(period + 100);
  }

  function yagamilight() {
    setFirstValue(0);
    setSecondValue(0);

    setMassMin(0);
    setMassMax(0);
    setonOrOff(false);
    setYagami(1);
    setShowCreateYagamiLightModal(true);
  }
  return (
    <div class="main_div d-flex flex-row ">
      <div className="container-fluid h-100">
        <div class="row flex no-wrap">
          <div className="bg-secondary col-auto col-md-3 min-vh-100">
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
                <div>
                  <li class="nav-item text-white fs-4 mt-4">
                    <button type="button" class="btn btn-light" onClick={stop}>
                      Приостановить
                    </button>
                  </li>
                  <li class="nav-item text-white fs-4 mt-2">
                    <button
                      type="button"
                      class="btn btn-light"
                      onClick={faster}
                    >
                      Частотa отслеж. +
                    </button>
                  </li>
                  <li class="nav-item text-white fs-4 mt-2">
                    <button
                      type="button"
                      class="btn btn-light"
                      onClick={slower}
                    >
                      Частотa отслеж. -
                    </button>
                  </li>
                </div>

                <li class="nav-item text-white fs-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={() => setShowCreateEconomicModal(true)}
                  >
                    Экономич. эфф.
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => setShowCreateEconomicModal(true)}
                  >
                    Поломка датчика
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-2">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={yagamilight}
                  >
                    Отключение эл-ва
                  </button>
                </li>
              </div>
            </ul>
          </div>
          <div class="temp">
            <div class="abys">
              <div>
                <TimeMaster yagami={yagami} />
              </div>
              <div>
                <div class="pl-5 pt-4">
                  <label for="name">
                    Температура <b>воздуха</b>, С :
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minlength="4"
                    maxlength="8"
                    size="10"
                    value={onOrOff ? temp + 4 : 0}
                  />
                </div>

                <div class="pl-5">
                  <label for="name">
                    Температура <b>снега</b>, С :
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minlength="4"
                    maxlength="8"
                    size="10"
                    value={onOrOff ? temp : 0}
                  />
                </div>
              </div>
            </div>
            <PressureChart
              period={period}
              firstValue={firstValue}
              secondValue={secondValue}
              barMin={barMin}
              barMax={barMax}
              onOrOff={onOrOff}
              massMin={massMin}
              massMax={massMax}
            />
          </div>
        </div>
      </div>

      <div>
        <ChartComponent
          period={period}
          firstValue={firstValue}
          secondValue={secondValue}
          barMin={barMin}
          barMax={barMax}
          onOrOff={onOrOff}
          massMin={massMin}
          massMax={massMax}
        />
      </div>
      <div>
        <EconomicModal
          show={showCreateEconomicModal}
          onClose={() => setShowCreateEconomicModal(false)}
          rashody={rashody}
        >
          {" "}
        </EconomicModal>

        <AvalancheModal
          show={showCreateAvalancheModal}
          onClose={() => setShowCreateAvalancheModal(false)}
        >
          {" "}
        </AvalancheModal>

        <YagamiLightModal
          show={showCreateYagamiLightModal}
          onClose={() => setShowCreateYagamiLightModal(false)}
        >
          {" "}
        </YagamiLightModal>
      </div>
    </div>
  );
});

export default OperationPanel;
