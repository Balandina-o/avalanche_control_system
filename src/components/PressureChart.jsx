import React from "react";
import Plot from "react-plotly.js";

const count = 100;

const startingNumbers = Array(count)
  .fill(1)
  .map((_, i) => i);

export default function ChartComponent(props) {
  const [data, setData] = React.useState({
    x: startingNumbers,
    y: startingNumbers,
  });

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
                props.secondValue
            ),
          ],
        };
      });

      setData2(
        Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
      );
      setData3(
        Array.from({ length: 100 }, () => Math.floor(Math.random() * props.bar))
      );
    }, props.period);

    return () => {
      clearInterval(interval);
    };
  }, [props.period]);

  return (
    <div>
      <Plot
        data={[data]}
        layout={{
          showlegend: false,
          width: 600,
          height: 400,
          title: "График: динамика изменения давления снежного пласта, Па",
          xaxis: { range: [-2, 60], title: "s." }, //visible: false
          yaxis: { range: [-2, count], title: "%" },
        }}
      />
      <div class="display-flex flex-direction row ml-4">
        <div class="display-flex">
          <label for="name">Текущее давление, Па.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={Math.random() * 100}
          />
        </div>
        <div class="display-flex">
          <label for="name">Площадь охвата, км.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value="1000"
          />
        </div>
      </div>
    </div>
  );
}
