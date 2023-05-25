import classNames from "classnames";

export default function CrossHair({  x, y, chartDims  }: any) {

  if (x + y == 0) {
    return <></>;
  }

  return (
    <>
      <line
      stroke="white"
      strokeOpacity= "70%"
      strokeDasharray={3}
        x1={0}
        y1={y}
        x2={chartDims.pixel_width}
        y2={y}
        className={classNames({
            cross_hair: true,
            horz: true
          })}
      />
      <line
      stroke="white"
      strokeOpacity= "70%"
      strokeDasharray={3}
        x1={x}
        y1={0}
        x2={x}
        y2={chartDims.pixel_height}
        className={classNames({
          cross_hair: true,
          vert: true,
        })}
      />
    </>
  );
}
