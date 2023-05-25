import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Candle from "../../components/item/Candle";
import CrossHair from "../../components/item/CrossHair";
import YCordinate from "../../components/item/YCordinate";
import { Color } from "../../constants/Color";

// interface ChartProps {
//   candles: ICandle[];
//   caliber: number;
//   size: number;
//   domain: [number, number];
// }



export default function CandleStickChart({
  chartWidth,
  chartHeight,
  highest,
  lowest,
}: any) {
  // const  scaleY = scaleLinear().domain(domain).range([size, 0]);
  // const scaleBody = scaleLinear().domain([0, domain[1] - domain[0]]).range([0, size]);

  const data = [
    {
        time: '01/04',
        open: 311,
        high: 314.8,
        low: 309.8,
        close: 312.3,
        volume: 34
    },
    {
        time: "02/04",
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 313.8,
        volume: 34
    },
    {
        time: '03/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 313.8,
        volume: 34
    },
    {
        time: '04/04',
        open:  313.8,
        high:  320.8,
        low: 310.8,
        close: 312.3,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '06/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '07/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '08/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '09/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '10/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },
    {
        time: '05/04',
        open: 312.3,
        high: 318.8,
        low: 310.8,
        close: 317.8,
        volume: 34
    },


  ];

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



  const candle_width = Math.floor((chartWidth / data.length) * 0.6);

  

//   const [width, setWidth] = useState(100);
//   const [height, setHeight] = useState(100);
//   const demoRef = useRef<Element>();

//   useEffect(() => {
//     const resizeObserver = new ResizeObserver((event) => {
//       setWidth(event[0].contentBoxSize[0].inlineSize);
//       setHeight(event[0].contentBoxSize[0].blockSize);
//     });

//     if (demoRef) {
//       resizeObserver.observe((demoRef.current === undefined) ?  : demoRef.current);
//     }
//   }, [demoRef]);

  const chart_dims = {
    pixel_width: chartWidth,
    pixel_height: chartHeight,
    highest,
    lowest,
    dollar_delta: highest - lowest,
  };

  chart_dims['highest'] = 325
  chart_dims['lowest'] = 300

  const pixelFor = (dollar:any) => {
    // return Math.abs(
    //   ((dollar - chart_dims["lowest"]) / chart_dims["highest"]) *
    //     chart_dims["pixel_height"] -
    //     chart_dims["pixel_height"]
    // );

    return chart_dims.pixel_height - Math.abs(
        (dollar - chart_dims.lowest) / (chart_dims.highest - chart_dims.lowest) 
            * chart_dims.pixel_height
    );
  };

  const dollarAt = (pixel: any) => {
    const dollar =
      (Math.abs(pixel - chart_dims.pixel_height) / chart_dims.pixel_height) *
        chart_dims.dollar_delta +
      chart_dims.lowest;

    return pixel > 0 ? dollar.toFixed(2) : "-";
  };

  return (
    <svg

    className="w-100 "
    height={chartHeight}
      onMouseMove={onMouseMoveInside}
      onClick={onMouseClickInside}
      onMouseLeave={onMouseLeave}
      style={{backgroundColor: Color.primary}}

    >

        <YCordinate lowestPrice={chart_dims.lowest} highestPrice={chart_dims.highest} pixelFor={pixelFor} pixel_width={chart_dims.pixel_width}/>
        {data.map((bar, i) => {
        const candle_x = (chartWidth / (data.length + 1)) * (i + 1) - 20;
        return (
          <Candle
            key={i}
            data={bar}
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
  );
}
