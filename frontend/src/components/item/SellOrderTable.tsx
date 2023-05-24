import { Table } from "react-bootstrap";
import OrderRecord from "./OrderRecord";
import { Color } from "../../constants/Color";

export default function BuyOrderTable({ records }: any) {
    return (
        <>
          <Table striped hover variant="dark" className="m-0">
            <thead>
              <tr>
                <th style={{fontSize: `0.7rem`, textAlign: `start`}}>Price</th>
                <th style={{fontSize: `0.7rem`, textAlign: `end`}}>Quantity</th>
                <th style={{fontSize: `0.7rem`, textAlign: `end`}}>Total</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record:any) => {
                return( <OrderRecord key={record.id} record={record} color={Color.text_red}/>);
              })}
            </tbody>
          </Table>
        </>
      );
}
