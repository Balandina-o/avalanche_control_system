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
import CrushOfTheSensorModal from "./CrushOfTheSensorModal";

const OperationPanel = observer(() => {
  const [typeOfSensor, setTypeOfSensor] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState(0);

  const [priceMass, setPriceMass] = useState([]);

  const [periodTimeMass, setPeriodTimeMass] = useState([]);

  var priceVar = 0;

  const [onOrOff, setonOrOff] = useState("true");

  const [onOrOff1, setonOrOff1] = useState("true");
  const [onOrOff2, setonOrOff2] = useState("true");
  const [onOrOff3, setonOrOff3] = useState("true");

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
  const [showCreateCrushOfTheSensorModal, setShowCreateCrushOfTheSensorModal] =
    useState();

  const [yagami, setYagami] = useState(0);

  const [massMin, setMassMin] = useState(0);
  const [massMax, setMassMax] = useState(0);

  const [massMin1, setMassMin1] = useState(0);
  const [massMax1, setMassMax1] = useState(0);

  const [massMin800, setMassMin800] = useState(800);
  const [massMax200, setMassMax200] = useState(200);

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

    setMassMin1(250);
    setMassMax1(300);

    setMassMin800(800);
    setMassMax200(200);

    setYagami(0);
  }

  function avalanche() {
    setFirstValue(50);
    setSecondValue(20);
    setonOrOff(true);

    setMassMin800(800);
    setMassMax200(200);

    setRashody(100000);
    setBarMin(100);
    setBarMax(150);

    setMassMin1(250);
    setMassMax1(500);
    setTemp(Math.floor(Math.random() * (1 + 3) - 3));

    setMassMin(250);
    setMassMax(500);
    setYagami(0);

    setTimeout(peace, 9000);
  }

  function please() {
    setTimeout(peace, 10000);
  }

  function peace() {
    setFirstValue(15);
    setSecondValue(5);
    setonOrOff(true);

    setMassMin800(800);
    setMassMax200(200);

    setBarMin(1);
    setBarMax(5);
    setTemp(-1 * Math.floor(Math.random() * (30 - 10) + 10));

    setMassMin1(150);
    setMassMax1(200);

    setMassMin(150);
    setMassMax(200);
    setYagami(0);
  }

  function stop() {
    setFirstValue(0);
    setSecondValue(0);

    setMassMin800(0);
    setMassMax200(0);

    setMassMin1(0);
    setMassMax1(0);

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

    setMassMin800(0);
    setMassMax200(0);

    setMassMin1(0);
    setMassMax1(0);

    setMassMin(0);
    setMassMax(0);
    setonOrOff(false);
    setYagami(1);

    setPeriodTimeMass((current) => [...current, 1]);

    setShowCreateYagamiLightModal(true);
  }

  function wet() {
    priceVar = priceVar + 50000;
    setPrice(priceVar);
    //alert("wet");
    // setPriceMass({ priceMass: [...this.state.priceMass, 50000] });
    setPriceMass((current) => [...current, 50000]);
    setTypeOfSensor("влажности");
    setCost("50.000");
    setonOrOff2("false");
    setFirstValue(0);
    setSecondValue(0);

    setMassMin800(0);
    setMassMax200(0);

    setMassMin1(0);
    setMassMax1(0);
  }

  function noise() {
    priceVar = priceVar + 25000;
    // setPriceMass({ priceMass: [...this.state.priceMass, 25000] });

    setPriceMass((current) => [...current, 25000]);

    setPrice(priceVar);
    //alert("noise");
    setCost("25.000");
    setTypeOfSensor("шума");
    setonOrOff3("false");
    setBarMax(0);
    setBarMin(0);
  }

  function pressure() {
    priceVar = priceVar + 25000;
    //setPriceMass({ priceMass: [...this.state.priceMass, 25000] });
    setPriceMass((current) => [...current, 25000]);
    setPrice(priceVar);
    //alert("pressure");
    setCost("25.000");
    setTypeOfSensor("давления");
    setonOrOff1("false");
    setMassMin(0);
    setMassMax(0);
  }

  const arrFunc = [wet, noise, pressure];
  function randFunc() {
    arrFunc[Math.floor(Math.random() * arrFunc.length)]();
    setShowCreateCrushOfTheSensorModal(true);
  }

  // function generateArrayRandomNumber(min, max) {
  //   var totalNumbers = max - min + 1,
  //     arrayTotalNumbers = [],
  //     arrayRandomNumbers = [],
  //     tempRandomNumber;

  //   while (totalNumbers--) {
  //     arrayTotalNumbers.push(totalNumbers + min);
  //   }

  //   while (arrayTotalNumbers.length) {
  //     tempRandomNumber = Math.round(
  //       Math.random() * (arrayTotalNumbers.length - 1)
  //     );

  //     arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);

  //     arrayTotalNumbers.splice(tempRandomNumber, 1);
  //   }

  //   return arrayRandomNumbers;
  // }

  // alert(generateArrayRandomNumber(45, 67));

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
                    onClick={randFunc}
                  >
                    Поломка датчика
                  </button>
                </li>
                <li class="nav-item text-white fs-4 mt-2">
                  <button type="button" class="btn btn-light" onClick={peace}>
                    Починка
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
              barMin={barMin}
              barMax={barMax}
              onOrOff={onOrOff}
              onOrOff1={onOrOff1}
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
          onOrOff2={onOrOff2}
          onOrOff3={onOrOff3}
          onOrOff={onOrOff}
          massMin={massMin}
          massMax={massMax}
          massMin800={massMin800}
          massMax200={massMax200}
          massMin1={massMin1}
          massMax1={massMax1}
        />
      </div>
      <div>
        <EconomicModal
          show={showCreateEconomicModal}
          onClose={() => setShowCreateEconomicModal(false)}
          rashody={rashody}
          price={price}
          priceMass={priceMass}
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
          please={please}
          periodTimeMass={periodTimeMass}
        >
          {" "}
        </YagamiLightModal>

        <CrushOfTheSensorModal
          show={showCreateCrushOfTheSensorModal}
          onClose={() => setShowCreateCrushOfTheSensorModal(false)}
          cost={cost}
          typeOfSensor={typeOfSensor}
        >
          {" "}
        </CrushOfTheSensorModal>
      </div>
    </div>
  );
});

export default OperationPanel;
