import { Color } from "../../constants/color";

export default function Candle({
  data,
  x,
  candle_width,
  pixelFor,
  pixel_height,
}: any) {
  const up = data.close > data.open;
  const bar_top = pixelFor(up ? data.open : data.close);
  const bar_bottom = pixelFor(up ? data.close : data.open);
  const bar_height = Math.abs(bar_top - bar_bottom);
  const wick_top = pixelFor(data.high);
  const wick_bottom = pixelFor(data.low);
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
        {data.time}
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
