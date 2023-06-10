import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Candle from "../../components/item/Candle";
import CrossHair from "../../components/item/CrossHair";
import YCordinate from "../../components/item/YCordinate";
import { Color } from "../../constants/Color";
import { ICandle } from "../../constants/types";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import APIS from "../../constants/api";
import { useParams } from "react-router-dom";
import { item } from "../../client/axios";


function reworkData(candles: ICandle[]) : ICandle[]{
  let data: ICandle[] = [];



  return data;
}


export default function CandleStickChart({
  chartWidth,
  chartHeight,
  highest,
  lowest,
  item_name,
}: any) {
  // const  scaleY = scaleLinear().domain(domain).range([size, 0]);
  // const scaleBody = scaleLinear().domain([0, domain[1] - domain[0]]).range([0, size]);

  const [candles, setCandles] = useState<ICandle[]>();

  // const [curCandle, setCurCandle] = useState<ICandle>();

  useEffect(() => {
    item
      .get<ICandle[]>(APIS.GET_CANDLE_HOUR + "?item=" + item_name + "&space=1")
      .then((res) => {
        setCandles(res.data);
      });
  }, [item_name]);



  const [mouseCoords, setMouseCoords] = useState({
    x: 0,
    y: 0,
  });

  const onMouseLeave = () => {
    setMouseCoords({
      x: 0,
      y: 0,
    });
  };

  const onMouseMoveInside = (e: any) => {
    setMouseCoords({
      x:
        e.nativeEvent.x -
        Math.round(e.currentTarget.getBoundingClientRect().left),
      y:
        e.nativeEvent.y -
        Math.round(e.currentTarget.getBoundingClientRect().top),
    });
  };
  
  const onMouseClickInside = (e: any) => {
    console.log(`Click at ${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY}`);
  };

  if (candles === undefined) return <></>;

  const candle_width = Math.floor((chartWidth / candles.length) * 0.6);

  const chart_dims = {
    pixel_width: chartWidth,
    pixel_height: chartHeight,
    highest,
    lowest,
    dollar_delta: highest - lowest,
  };

  chart_dims["highest"] = 50;
  chart_dims["lowest"] = 0;

  const pixelFor = (dollar: any) => {
    // return Math.abs(
    //   ((dollar - chart_dims["lowest"]) / chart_dims["highest"]) *
    //     chart_dims["pixel_height"] -
    //     chart_dims["pixel_height"]
    // );

    return (
      chart_dims.pixel_height -
      Math.abs(
        ((dollar - chart_dims.lowest) /
          (chart_dims.highest - chart_dims.lowest)) *
          chart_dims.pixel_height
      )
    );
  };

  const dollarAt = (pixel: any) => {
    const dollar =
      (Math.abs(pixel - chart_dims.pixel_height) / chart_dims.pixel_height) *
        chart_dims.dollar_delta +
      chart_dims.lowest;

    return pixel > 0 ? dollar.toFixed(2) : "-";
  };

  const radios = [
    { name: "Minute", value: "1" },
    { name: "Hour", value: "2" },
  ];


  return (
    <>
      <ButtonGroup className="mb-2 ">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <svg
        className="w-100 "
        height={chartHeight}
        onMouseMove={onMouseMoveInside}
        onClick={onMouseClickInside}
        onMouseLeave={onMouseLeave}
        style={{ backgroundColor: Color.grey }}
      >
        <YCordinate
          lowestPrice={chart_dims.lowest}
          highestPrice={chart_dims.highest}
          pixelFor={pixelFor}
          pixel_width={chart_dims.pixel_width}
        />
        {candles.map((candle, i) => {
          const candle_x = (chartWidth / (candles.length + 1)) * (i + 1) - 20;
          return (
            <Candle
              key={i}
              candle={candle}
              x={candle_x}
              candle_width={candle_width}
              pixel_height={chart_dims.pixel_height}
              pixelFor={pixelFor}
            />
          );
        })}
        <text x="10" y="16" fill="white" fontSize="10">
          <tspan>
            Mouse: {mouseCoords.x}, {mouseCoords.y}
          </tspan>
          <tspan x="10" y="30">
            Dollars: ${dollarAt(mouseCoords.y)}
          </tspan>
        </text>
        <CrossHair x={mouseCoords.x} y={mouseCoords.y} chartDims={chart_dims} />
      </svg>
    </>
  );
}
