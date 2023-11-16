import React, { useState } from "react";
import Plot from "react-plotly.js";

const count = 100;
const count2 = 150;

const startingNumbers = Array(count)
  .fill(1)
  .map((_, i) => i);

export default function ChartComponent(props) {
  const [data, setData] = React.useState({
    x: startingNumbers,
    y: startingNumbers,
  });

  const [massPlast, setMassPlast] = useState(0);
  const [data2, setData2] = React.useState({});
  const [data3, setData3] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        return {
          x: prev.x,
          y: [
            ...prev.y.slice(1),
            Math.floor(
              Math.random() * (props.secondValue - props.firstValue) +
                props.firstValue
            ),
          ],
        };
      });

      setData2(
        props.onOrOff && props.onOrOff3
          ? Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
          : 0
      );
      setData3(
        props.onOrOff && props.onOrOff3
          ? Array.from({ length: 100 }, () =>
              Math.floor(
                Math.random() * (props.barMax - props.barMin + 1) + props.barMin
              )
            )
          : 0
      );

      setMassPlast(Math.round(Math.random() * (500 - 100 + 100)));
    }, props.period);

    return () => {
      clearInterval(interval);
    };
  }, [props.firstValue, props.period, props.barMin]);

  return (
    <div>
      <Plot
        data={[data]}
        layout={{
          showlegend: false,
          width: 600,
          height: 350,
          title: "График: динамика изменения влажности, %",
          xaxis: { range: [-2, 120], title: "s.", visible: false }, //visible: false
          yaxis: { range: [-2, count], title: "%" },
        }}
      />
      <div class="display-flex flex-direction row">
        <div class="display-flex">
          <label for="name">Масса влаги, т.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={
              props.onOrOff && props.onOrOff2
                ? Math.round(
                    Math.random() * (props.massMin800 - props.massMax200)
                  ) / 100
                : 0
            }
          />
        </div>
        <div>
          <label for="name">Масса пласта, т.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={
              props.onOrOff && props.onOrOff2
                ? Math.floor(
                    Math.random() * (props.massMax1 - props.massMin1) +
                      props.massMin1
                  )
                : 0
            }
          />
        </div>

        <div>
          <label for="name">Влажность, %:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={Math.floor(
              Math.random() * (props.secondValue - props.firstValue) +
                props.firstValue
            )}
          />
        </div>
        <div>
          <label for="name">Период отслеживания, ms.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={props.onOrOff ? props.period : 0}
          />
        </div>
      </div>
      <Plot
        data={[
          {
            type: "bar",
            x: data2,
            y: data3,
          },
        ]}
        layout={{
          width: 600,
          height: 250,

          title: "Визуализация данных шумомера, Дб.",
          xaxis: { range: [-2, count], visible: false },
          yaxis: { range: [-2, count2], title: "Дб." },
        }}
      />
      <div class="display-flex flex-direction row">
        <div>
          <label for="name">Уровень звука, Дб:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={
              props.onOrOff
                ? Math.floor(
                    Math.round(
                      Math.random() * (props.barMax - props.barMin) +
                        props.barMin
                    )
                  )
                : 0
            }
          />
        </div>
        <div>
          <label for="name">Период отслеживания, ms.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={props.onOrOff ? props.period : 0}
          />
        </div>
      </div>
    </div>
  );
}
