import { Color } from "../../constants/Color";

export default function YCordinate({
  lowestPrice,
  highestPrice,
  pixelFor,
  pixel_width,
}: any) {
  const diff = (highestPrice - lowestPrice) / 16;

  return (
    <>
      {Array.from(Array(17).keys()).map((index) => (
        <>
          <text
            x={1012}
            y={index * 32 + 44}
            fill={Color.text_grey}
            fontSize="12"
          >
            {Math.round((highestPrice - diff * index) * 10) / 10}
          </text>
        </>
      ))}
    </>
  );
}