import { Component } from "react";
import Candle, { ICandle } from "../../components/item/Candle";
import { scaleLinear } from "d3-scale";


interface ChartProps {
    candles: ICandle[],
    caliber: number, 
    size: number,
    domain: [number, number]
}

export default function CandleStickChart({candles, caliber, size, domain} : ChartProps) {
    const  scaleY = scaleLinear().domain(domain).range([size, 0]);
    const scaleBody = scaleLinear().domain([0, domain[1] - domain[0]]).range([0, size]);

    return (
        <div>
            {
                candles.map((candle, index) => (
                    <Candle index={0} width={0} scaleY={undefined} scaleBody={undefined} key={index} {...{ candle, caliber }}/>
                ))
            }
        </div>
    )
}