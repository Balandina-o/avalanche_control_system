import React from "react";
import Plot from "react-plotly.js";

const count = 100;

const startingNumbers = Array(count)
  .fill(1)
  .map((_, i) => i);

export default function PressureChart(props) {
  const [data, setData] = React.useState({
    x: startingNumbers,
    y: startingNumbers,
  });

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
    }, props.period);

    return () => {
      clearInterval(interval);
    };
  }, [props.firstValue, props.period]);

  return (
    <div>
      <Plot
        data={[data]}
        layout={{
          showlegend: false,
          width: 600,
          height: 350,
          title: "График: динамика изменения давления снежного пласта, Па.",
          xaxis: { range: [-2, 120], title: "s.", visible: false }, //visible: false
          yaxis: { range: [-2, count], title: "Па." },
        }}
      />
      <div class="display-flex flex-direction row ml-5">
        <div>
          <label for="name">Давление пласта, Па.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={
              props.onOrOff ? Math.round(Math.random() * (500 - 100 + 100)) : 0
            }
          />
          <label for="name">Пложащь пласта, м.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={props.onOrOff ? 1000 : 0}
          />
        </div>
      </div>
      <div class="ml-5">
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
  );
}
