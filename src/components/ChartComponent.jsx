import React from "react";
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
          showlegend: true,

          title: "Влажность, %",
          xaxis: { range: [-2, 60], title: "ms.т" }, //visible: false
          yaxis: { range: [-2, count], title: "%" },
        }}
      />
      <Plot
        data={[
          {
            type: "bar",
            x: data2,
            y: data3,
          },
        ]}
        layout={{
          title: "Real-time Data",
          xaxis: { range: [-2, count] },
          yaxis: { range: [-2, count2] },
        }}
      />
    </div>
  );
}
