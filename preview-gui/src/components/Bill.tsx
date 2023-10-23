import { Fragment, useState } from "react";
import { BillDisplayProps, Item } from "../types/type";
import ItemRow from "./ProductRow";
import EditForm from "./EditForm";
import ShippingAddress from "./ShippingAddress";
import Button from "./Button";

const Bill = ({ saveBillData, index, bill }: BillDisplayProps) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleClick = () => {
    !showEditForm ? setShowEditForm(true) : setShowEditForm(false);
  };

  const onEditFormClose = () => {
    setShowEditForm(false);
  };

  return (
    <Fragment>
      <div className="bill m-2">
        {/* Doc Details */}
        <div className="Doc-Details col mx-3 mt-3 d-flex">
          <div className="col-6 py-2 d-flex">
            <div className="px-4 col-4">Invoice No</div>
            <div className="px-1 col-8">: {bill.DocDtls.No}</div>
          </div>
          <div className="col-4 py-2 d-flex">
            <div className="px-3 col-3 d-flex justify-content-end">Date</div>
            <div className="px-4 col-9">: {bill.DocDtls.Dt}</div>
          </div>
          <div className="col py-1 d-flex justify-content-center">
            <Button onClick={handleClick} className="btn-success" text="Edit" icon="edit" />
          </div>
        </div>

        {/* Buyer Details */}
        <div className="Buyer-Details mx-3 mt-3">
          <div className="row gx-0">
            <div className="col-7">
              <div className="col d-flex my-2">
                <div className="col-2 px-4">Name</div>
                <div className="col px-2">: {bill.BuyerDtls.LglNm}</div>
              </div>
              <div className="col d-flex my-2">
                <div className="col-2 px-4">Address</div>
                <div className="col">
                  <div className="col px-2">: {bill.BuyerDtls.Addr1}</div>
                  <div className="col px-3">
                    {" "}
                    {bill.BuyerDtls.Loc} {bill.BuyerDtls.Pin}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="col d-flex my-2">
                <div className="col-4 px-3">Phone</div>
                <div className="col px-2">: {bill.BuyerDtls.Ph}</div>
              </div>
              <div className="col d-flex my-2">
                <div className="col-4 px-3">GSTIN</div>
                <div className="col px-2">: {bill.BuyerDtls.Gstin}</div>
              </div>
            </div>
          </div>

          {bill.ShipDtls ? <ShippingAddress ShipDtls={bill.ShipDtls} /> : null}
        </div>

        {/* Table */}
        <div className="mt-3 mx-3">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Item</th>
                <th scope="col">HSN</th>
                <th scope="col">GST</th>
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
              {bill.ItemList.map((item: Item, index) => (
                <ItemRow key={index} item={item} />
              ))}
              <tr className="Total-Row">
                <th scope="row"></th>
                <td>Round Off</td>
                <td> ₹ {bill.ValDtls.RndOffAmt}</td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td></td>
                <td> ₹ {bill.ValDtls.AssVal}</td>
                <td> ₹ {bill.ValDtls.CgstVal}</td>
                <td> ₹ {bill.ValDtls.SgstVal}</td>
                <td> ₹ {bill.ValDtls.TotInvVal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showEditForm ? (
        <EditForm
          saveBillData={saveBillData}
          index={index}
          closeEditForm={onEditFormClose}
          bill={bill}
        />
      ) : null}
    </Fragment>
  );
};

export default Bill;
