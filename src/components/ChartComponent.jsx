import React from "react";
import Plot from "react-plotly.js";

const count = 50;

const startingNumbers = Array(count)
  .fill(1)
  .map((_, i) => i);

export default function ChartComponent(props) {
  const [data, setData] = React.useState({
    x: startingNumbers,
    y: startingNumbers,
  });

  React.useEffect(() => {
    //alert("sec " + props.period + props.firstValue + props.secondValue);
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
          title: "Real-time Data App",
          xaxis: { range: [-2, count] },
          yaxis: { range: [-2, count] },
        }}
      />
    </div>
  );
}
