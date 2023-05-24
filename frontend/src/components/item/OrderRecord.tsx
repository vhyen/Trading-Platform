

export default function OrderRecord({record, color}:any) {
    return (
        <>
        <style className="text/css">
            {
                `
                    td {
                        font-size: 0.7rem;
                    }
                `
            }
        </style>
        <tr>
            <td style={{color:`${color}`}}><p className="fw-bold my-0">{record.price}</p></td>
            <td style={{textAlign: `end`}}><p className="fw-bold my-0">{record.quantity}</p></td>
            <td style={{textAlign: `end`}}><p className="fw-bold my-0">{record.total}</p></td>
        </tr>
        </>
    );
}