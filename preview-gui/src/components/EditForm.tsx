import { useEffect, useState } from "react";
import { BillProps, Invoice, Item} from "../types/type";
import EditItemRow from "./EditProductRow";
import ShippingAddressForm from "./ShippingAddressForm";
import Button from "./Button";
import { itemKeySet, numberKeySet, shippingDetails } from "../utils/constants";

const EditForm = ({ saveBillData, index, closeEditForm, bill }: BillProps) => {
  const [billData, setBillData] = useState(bill);
  const [showShippingAddressForm, setShowShippingAddressForm] = useState(Boolean);

  useEffect(() => {
    if (billData.ShipDtls) {
      setShowShippingAddressForm(true);
    } else {
      setShowShippingAddressForm(false);
    }
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let value: string | number = event.target.value;
    const name = event.target.name;
    const [nameA, nameB] = name.split(".");

    if (numberKeySet.has(nameB)) {
      value = parseFloat(value);
    }

    setBillData((billInfo: Invoice) => ({
      ...billInfo,
      [nameA]: {
        ...billInfo[nameA as keyof Invoice],
        [nameB]: value,
      },
    }));
  };

  const handleProduct = (name: string, value: string | number, index: number) => {
    if (itemKeySet.has(name)) {
      value = parseFloat(value?.toString());
    }

    setBillData((billInfo: Invoice) => ({
      ...billInfo,
      ItemList: [
        ...billInfo.ItemList.slice(0, index),
        { ...billInfo.ItemList[index], [name]: value },
        ...billInfo.ItemList.slice(index + 1),
      ],
    }));
  };

  const saveButtonClick = () => {
    saveBillData(index, billData);
    if (closeEditForm) {
      closeEditForm();
    }
  };

  const handleShippingButtonClick = () => {
    

    if (!showShippingAddressForm) {
      setShowShippingAddressForm(true);
      setBillData((billInfo: Invoice) => ({
        ...billInfo,
        ShipDtls: shippingDetails,
      }));
    } else {
      setShowShippingAddressForm(false);
      billData.ShipDtls = null;
    }
  };

  return (
    <div className="overlay">
      <div className="popup">
        <div className="px-3 pt-3 d-flex justify-content-end ">
          <span className="close material-symbols-outlined" onClick={closeEditForm}>
            close
          </span>
        </div>
        <div className="px-3 Scroll">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="Doc-Details col mt-2 d-flex">
              <div className="col-6 py-2 d-flex">
                <label className="px-4 col-4">Invoice No</label>
                <input
                  onChange={handleChange}
                  name="DocDtls.No"
                  value={billData.DocDtls.No}
                ></input>
              </div>

              <div className="col-5 py-2 d-flex">
                <label className="px-3 col-3 d-flex justify-content-end">Date</label>
                <input
                  onChange={handleChange}
                  name="DocDtls.Dt"
                  value={billData.DocDtls.Dt}
                ></input>
              </div>
            </div>
            <div className="Buyer-Details row m-auto mt-3 p-3">
              <div className="gx-0 col-7">
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
                    Pin Code
                  </label>
                  <input
                    className="col-2"
                    onChange={handleChange}
                    pattern="[1-9]{1}[0-9]{5}"
                    name="BuyerDtls.Pin"
                    value={billData.BuyerDtls.Pin}
                  ></input>
                </div>
              </div>
              <div className="col-5">
                <div className="row d-flex mb-2">
                  <label className="col-3 px-4" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="col-9 px-2"
                    onChange={handleChange}
                    name="BuyerDtls.Ph"
                    value={billData.BuyerDtls.Ph}
                  ></input>
                </div>
                <div className="row d-flex">
                  <label className="col-3 px-4" htmlFor="phone">
                    GSTIN
                  </label>
                  <input
                    className="col-9 px-2"
                    onChange={handleChange}
                    name="BuyerDtls.Gstin"
                    value={billData.BuyerDtls.Gstin}
                  ></input>
                </div>
              </div>
              <Button
                onClick={handleShippingButtonClick}
                className={"my-3 btn-outline-secondary"}
                text={"Shipping Address"}
                icon={showShippingAddressForm ? "expand_more" : "chevron_right"}
              />
              {showShippingAddressForm ? (
                <ShippingAddressForm billData={billData} handleChange={handleChange} />
              ) : null}
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
                        type="number"
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
                        type="number"
                        onChange={handleChange}
                        name="ValDtls.AssVal"
                        value={billData.ValDtls.AssVal}
                      ></input>
                    </td>
                    <td className="px-0">
                      ₹
                      <input
                        type="number"
                        onChange={handleChange}
                        name="ValDtls.CgstVal"
                        value={billData.ValDtls.CgstVal}
                      ></input>
                    </td>
                    <td className="px-0">
                      ₹
                      <input
                        type="number"
                        onChange={handleChange}
                        name="ValDtls.SgstVal"
                        value={billData.ValDtls.SgstVal}
                      ></input>
                    </td>
                    <td className="px-0">
                      ₹
                      <input
                        type="number"
                        pattern="^\d+(\.\d{1,2})?$"
                        onChange={handleChange}
                        name="ValDtls.TotInvVal"
                        value={billData.ValDtls.TotInvVal}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="px-3 gap-3 pb-3 d-flex justify-content-end ">
          <Button onClick={closeEditForm} className="btn-secondary" text="Close" icon="close" />
          <Button onClick={saveButtonClick} className="btn-success" text="Save" icon="save" />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
