

export default function OrderRecord({ record, color, fill }: any) {
    const td_style={backgroundColor: "transparent",fontSize:'0.8rem',paddingTop:2,paddingBottom:2,border:'none'}
    return (
    
    <>
      <style className="text/css">
        {`
        `}
      </style>
      <tr
        style={{
          background: `linear-gradient(to left, ${fill} ${Math.round(
            (record.total_filled * 100) / record.total_quantity
          )}%, white 2%)`,
        }}
      >
        <td style={{backgroundColor: "transparent",fontSize:'0.8rem',paddingTop:1,paddingBottom:1, color:color,border:'none'}}>
          <p className="my-0">{record.price}</p>
        </td>
        <td style={td_style}>
          <p className="my-0 text-end">{record.total_quantity}</p>
        </td>
        <td style={td_style}>
          <p className="my-0 text-end">
            {Math.round(record.total_quantity * 10 * record.price)/10}
          </p>
        </td>
      </tr>
    </>
  );
}
