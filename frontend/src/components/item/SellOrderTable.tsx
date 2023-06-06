import { Table } from "react-bootstrap";
import OrderRecord from "./OrderRecord";
import { Color } from "../../constants/Color";

export default function BuyOrderTable({ records }: any) {
    return (
        <>
          <Table variant="light" className="m-0">
            <tbody>
              {records.map((record:any) => {
                return( <OrderRecord key={record.price} record={record} color={Color.text_red} fill="#F6E3E6"/>);
              })}
            </tbody>
          </Table>
        </>
      );
}
