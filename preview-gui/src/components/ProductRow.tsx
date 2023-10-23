import { ItemRowProps } from "../types/type";

const ItemRow = ({ item }: ItemRowProps) => {
  return (
    <tr>
      <th className="px-3" scope="row">
        {item.SlNo}
      </th>
      <td>{item.PrdDesc}</td>
      <td>{item.HsnCd}</td>
      <td>{item.GstRt} %</td>
      <td> ₹ {item.UnitPrice}</td>
      <td>{item.Qty}</td>
      <td> ₹ {item.TotAmt}</td>
      <td> ₹ {item.AssAmt}</td>
      <td> ₹ {item.CgstAmt}</td>
      <td> ₹ {item.SgstAmt}</td>
      <td> ₹ {item.TotItemVal}</td>
    </tr>
  );
};

export default ItemRow;
