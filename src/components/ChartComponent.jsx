import React from "react";
import Plot from "react-plotly.js";

const count = 50;

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
          y: [...prev.y.slice(1), Math.floor(Math.random() * (10 - 12) + 10)],
        };
      });
    }, 500);

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
          xaxis: { range: [-2, count] },
          yaxis: { range: [-2, count] },
        }}
      />
    </div>
  );
}
