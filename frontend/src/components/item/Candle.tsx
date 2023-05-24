import { ScaleLinear } from "d3-scale";
import { Color } from "../../constants/Color";

const MARGIN = 2;

export interface ICandle {
  date: string;
  day: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandleProps {
  candle: ICandle;
  caliber: number;
  scaleY: ScaleLinear<number, number>;
  scaleBody: ScaleLinear<number, number>;
  index: number;
}

export default function Candle({
  candle: { low, high, open, close },
  index,
  caliber,
  scaleY,
  scaleBody,
}: CandleProps) {
  const color = (close > open) ? Color.text_green : Color.text_red;
  const x = caliber * index + 0.5 * caliber;
  return (
    <>
      <Line
        x1={x}
        x2={x}
        y1={scaleY(high)}
        y2={scaleY(low)}
        stroke={color}
        strokeWidth={1}
      />
      <Rect
        x={caliber * index + MARGIN}
        y={scaleY(Math.max(open, close))}
        width={caliber}
        height={scaleBody(Math.max(open, close) - Math.min(open, close))}
        fill={color}
      />
    </>
  );
}
