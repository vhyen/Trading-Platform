import { Color } from "../../constants/Color";
import { ICandle } from "../../constants/types";

export default function Candle({
  candle,
  x,
  candle_width,
  pixelFor,
  pixel_height,
}: {candle: ICandle, x: number, candle_width: number, pixelFor:any, pixel_height:number}) {
  const up = candle.close > candle.open;
  const bar_top = pixelFor(up ? candle.open : candle.close);
  const bar_bottom = pixelFor(up ? candle.close : candle.open);
  const bar_height = Math.abs(bar_top - bar_bottom);
  const wick_top = pixelFor(candle.highest);
  const wick_bottom = pixelFor(candle.lowest);
  const color = up ? Color.text_green : Color.text_red;

  return (
    <>
      <line
        stroke={Color.muted}
        strokeOpacity="70%"
        strokeWidth={0.4}
        strokeDasharray={3}
        x1={x}
        y1={0}
        x2={x}
        y2={pixel_height - 36}
      />
      <rect
        x={x - candle_width / 2}
        y={bar_bottom}
        width={candle_width}
        height={bar_height}
        fill={color}
        stroke={color}
      />
      <text
        x={x - 16}
        y={pixel_height - 16}
        fill={Color.primary}
        color={Color.primary}
        fontSize={12}
      >
        {candle.date}
      </text>

      <line
        stroke={color}
        strokeWidth={1.5}
        x1={x}
        y1={bar_top}
        x2={x}
        y2={wick_top}
      />

      <line
        stroke={color}
        strokeWidth={1}
        x1={x}
        y1={bar_bottom}
        x2={x}
        y2={wick_bottom}
      />
    </>
  );
}
