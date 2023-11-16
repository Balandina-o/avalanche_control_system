import React, { useState } from "react";
import Plot from "react-plotly.js";

const count = 500;

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
            props.onOrOff && props.onOrOff1
              ? Math.floor(
                  Math.random() * (props.massMax - props.massMin) +
                    props.massMin
                )
              : 0,
          ],
        };
      });
    }, props.period);

    return () => {
      clearInterval(interval);
    };
  }, [props.massMax, props.period]);

  return (
    <div>
      <Plot
        data={[data]}
        layout={{
          showlegend: false,
          width: 600,
          height: 350,
          title: "График: динамика изменения давления снежного пласта, Па.",
          xaxis: { range: [-2, 600], title: "s.", visible: false }, //visible: false
          yaxis: { range: [-2, count], title: "КПа./10" },
        }}
      />
      <div class="display-flex flex-direction row ml-5">
        <div>
          <label for="name">Давление пласта, КПа.:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="1"
            value={
              props.onOrOff && props.onOrOff1
                ? Math.floor(
                    Math.random() * (props.massMax - props.massMin) +
                      props.massMin
                  )
                : 0
            }
          />
          <label for="name">Площадь пласта, м.:</label>
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
