import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export default function Gauge({ value, updateColor }) {
  const getArcColor = (value) => {
    if (value <= 40) {
      return "red"; // Alarming
    } else if (value <= 60) {
      return "yellow"; // Caution
    } else if (value <= 80) {
      return "lime"; // Safe
    } else {
      return "green"; // Very Safe
    }
  };
  React.useEffect(() => {
    const color = getArcColor(value);
    updateColor(color);
  }, [value]);
  return (
    <GaugeContainer
      width={130}
      
      height={130}
      sx={{ color: "red" }}
      innerRadius={40}
      startAngle={-110}
      endAngle={110}
      value={value}
    >
      <GaugeReferenceArc />
      <GaugeValueArc   />
      <GaugePointer  />
    </GaugeContainer>
  );
}
