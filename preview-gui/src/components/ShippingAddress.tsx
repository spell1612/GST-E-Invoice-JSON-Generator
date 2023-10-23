import { Fragment } from "react";
import { ShippingDetailsProps } from "../types/type";

const ShippingAddress = ({ ShipDtls }: ShippingDetailsProps) => {
  return (
    <Fragment>
      <div className="sub-header row d-flex justify-content-start gx-0 px-4 py-2">
        Shipping Address
      </div>
      <div className="row gx-0">
        <div className="col-7">
          <div className="col d-flex my-2">
            <div className="col-2 px-4">Name</div>
            <div className="col px-2">: {ShipDtls?.LglNm}</div>
          </div>
          <div className="col d-flex my-2">
            <div className="col-2 px-4">Address</div>
            <div className="col">
              <div className="col px-2">: {ShipDtls?.Addr1}</div>
              <div className="col px-3"> {ShipDtls?.Loc}</div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="col d-flex my-2">
            <div className="col-4 px-3">State Code</div>
            <div className="col px-2">: {ShipDtls?.Stcd}</div>
          </div>
          <div className="col d-flex my-2">
            <div className="col-4 px-3">Pin Code</div>
            <div className="col px-2">: {ShipDtls?.Pin}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShippingAddress;
