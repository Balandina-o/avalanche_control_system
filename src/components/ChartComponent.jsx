import React from "react";
import Plot from "react-plotly.js";

const count = 30;

const startingNumbers = Array(count)
  .fill(1)
  .map((_, i) => i);

export default function ChartComponent() {
  const [data, setData] = React.useState({
    x: startingNumbers,
    y: startingNumbers,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        return {
          x: prev.x,
          y: [...prev.y.slice(1), Math.floor(Math.random() * count)],
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Plot
        data={[data]}
        layout={{
          title: "Real-time Data App",
          xaxis: { range: [-5, count] },
          yaxis: { range: [-5, count] },
        }}
      />
    </div>
  );
}