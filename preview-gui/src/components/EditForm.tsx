import { useState } from "react";
import { BillProps, Invoice, Item } from "../types/Type";
import EditItemRow from "./EditProductRow";

const EditForm = ({ saveBillData, index, showEditForm, bill }: BillProps) => {
  const [billData, setBillData] = useState(bill);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    const [nameA, nameB] = name.split(".");

    setBillData((billInfo: Invoice) => ({
      ...billInfo,
      [nameA]: { ...billInfo[nameA as keyof Invoice], [nameB]: value },
    }));
  };

  const handleProduct = (name: string, value: string | number, index: number) => {
    setBillData((billInfo: Invoice) => ({
      ...billInfo,
      ItemList: billInfo.ItemList.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const saveButtonClick = () => {
    saveBillData(index, billData);
  };

  // useEffect(() => {
  //   console.log("pb", billData);
  // }, [billData]);

  return (
    <div className="overlay">
      <div className="popup">
        <form>
          <div className="p-3">
            <div className=" d-flex justify-content-end ">
              <span className="close material-symbols-outlined" onClick={showEditForm}>
                close
              </span>
            </div>
            <div className="Doc-Details col mt-2 d-flex">
              <div className="col-6 py-2 d-flex">
                <div className="px-4 col-4">Invoice No</div>:
                <input
                  onChange={handleChange}
                  name="DocDtls.No"
                  value={billData.DocDtls.No}
                ></input>
              </div>

              <div className="col-5 py-2 d-flex">
                <div className="px-3 col-3 d-flex justify-content-end">Date</div>:
                <input
                  // type="number"
                  onChange={handleChange}
                  name="DocDtls.Dt"
                  value={billData.DocDtls.Dt}
                ></input>
              </div>
            </div>
            <div className="row m-auto mt-3">
              <div className="gx-0 col-7 ">
                <label className="col-2 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="col-10 mb-2"
                  onChange={handleChange}
                  name="BuyerDtls.LglNm"
                  value={billData.BuyerDtls.LglNm}
                ></input>
                <label className="col-2 mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  className="col-10 mb-2"
                  onChange={handleChange}
                  name="BuyerDtls.Addr1"
                  value={billData.BuyerDtls.Addr1}
                ></input>
                <div className="col d-flex">
                  <label className="col-2" htmlFor="location"></label>
                  <input
                    className="col-6"
                    onChange={handleChange}
                    name="BuyerDtls.Loc"
                    value={billData.BuyerDtls.Loc}
                  ></input>
                  <label className="col-2 pt-1 d-flex justify-content-center" htmlFor="pin">
                    Pin
                  </label>
                  <input
                    className="col-2"
                    onChange={handleChange}
                    name="BuyerDtls.Pin"
                    value={billData.BuyerDtls.Pin}
                  ></input>
                </div>
              </div>
              <div className="col-5">
                <div className="row d-flex mb-2">
                  <label className="col-2 px-4" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="col-10 px-2"
                    onChange={handleChange}
                    name="BuyerDtls.Ph"
                    value={billData.BuyerDtls.Ph}
                  ></input>
                </div>
                <div className="row d-flex">
                  <label className="col-2 px-4" htmlFor="phone">
                    GSTIN
                  </label>
                  <input
                    className="col-10 px-2"
                    onChange={handleChange}
                    name="BuyerDtls.Gstin"
                    value={billData.BuyerDtls.Gstin}
                  ></input>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Sl No</th>
                    <th scope="col">Item</th>
                    <th scope="col">HSN</th>
                    <th scope="col">GST (%)</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Qty KG</th>
                    <th scope="col">Gross</th>
                    <th scope="col">Taxable</th>
                    <th scope="col">CGST</th>
                    <th scope="col">SGST</th>
                    <th scope="col d-flex justify-content-end ">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {billData.ItemList.map((item: Item, index) => (
                    <EditItemRow
                      key={index}
                      index={index}
                      item={item}
                      handleProduct={handleProduct}
                    />
                  ))}
                  <tr className="Total-Row">
                    <th scope="row"></th>
                    <td>Round Off</td>
                    <td className="px-0">
                      ₹
                      <input
                        style={{ width: 50 }}
                        onChange={handleChange}
                        name="ValDtls.RndOffAmt"
                        value={billData.ValDtls.RndOffAmt}
                      ></input>
                    </td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                    <td className="px-0">
                      ₹
                      <input
                        onChange={handleChange}
                        name="ValDtls.AssVal"
                        value={billData.ValDtls.AssVal}
                      ></input>
                    </td>
                    <td className="px-0">
                      ₹
                      <input
                        onChange={handleChange}
                        name="ValDtls.CgstVal"
                        value={billData.ValDtls.CgstVal}
                      ></input>
                    </td>
                    <td className="px-0">
                      ₹
                      <input
                        onChange={handleChange}
                        name="ValDtls.SgstVal"
                        value={billData.ValDtls.SgstVal}
                      ></input>
                    </td>
                    <td className="px-0">
                      ₹
                      <input
                        onChange={handleChange}
                        name="ValDtls.TotInvVal"
                        value={billData.ValDtls.TotInvVal}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="close d-flex justify-content-end ">
              <button
                className="btn btn-outline-success d-flex "
                type="submit"
                onClick={saveButtonClick}
              >
                Save <span className="material-symbols-outlined ml-1">save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
