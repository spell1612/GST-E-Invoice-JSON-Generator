import { useEffect } from "react";
import { ItemProps } from "../types/Type";

const EditItemRow = ({ index, item, handleProduct }: ItemProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    handleProduct(name, value, index);
  };

  useEffect(() => {}, []);
  return (
    <tr>
      <th className="px-3" scope="row">
        {item.SlNo}
      </th>
      <td>
        <input name="PrdDesc" value={item.PrdDesc} onChange={handleChange}></input>
      </td>
      <td>
        <input
          style={{ width: 50 }}
          name="HsnCd"
          value={item.HsnCd}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          style={{ width: 40 }}
          name="GstRt"
          value={item.GstRt}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          style={{ width: 60 }}
          name="UnitPrice"
          value={item.UnitPrice}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          style={{ width: 60 }}
          name="Qty"
          value={item.Qty}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input type="number" name="TotAmt" value={item.TotAmt} onChange={handleChange}></input>
      </td>
      <td>
        <input type="number" name="AssAmt" value={item.AssAmt} onChange={handleChange}></input>
      </td>
      <td>
        <input type="number" name="CgstAmt" value={item.CgstAmt} onChange={handleChange}></input>
      </td>
      <td>
        <input type="number" name="SgstAmt" value={item.SgstAmt} onChange={handleChange}></input>
      </td>
      <td>
        <input
          type="number"
          name="TotItemVal"
          value={item.TotItemVal}
          onChange={handleChange}
        ></input>
      </td>
    </tr>
  );
};

export default EditItemRow;
