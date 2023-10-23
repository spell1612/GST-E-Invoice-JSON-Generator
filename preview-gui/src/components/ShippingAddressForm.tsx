import { ShippingFormProps } from "../types/type";

const ShippingAddressForm = ({ billData, handleChange }: ShippingFormProps) => {
  return (
    <div className="shipping gx-0 row m-auto">
      <div className="gx-0 col-7">
        <div className="col d-flex">
          <label className="col-2 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="col-10 mb-2"
            required
            onChange={handleChange}
            name="ShipDtls.LglNm"
            value={billData.ShipDtls?.LglNm}
          ></input>
        </div>
        <div className="col d-flex">
          <label className="col-2 mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="col-10 mb-2"
            required
            onChange={handleChange}
            name="ShipDtls.Addr1"
            value={billData.ShipDtls?.Addr1}
          ></input>
        </div>
        <div className="col d-flex">
          <label className="col-2" htmlFor="location">
            Location
          </label>
          <input
            className="col-10"
            required
            onChange={handleChange}
            name="ShipDtls.Loc"
            value={billData.ShipDtls?.Loc}
          ></input>
        </div>
      </div>
      <div className="col-5">
        <div className="row gx-0 mb-2">
          <label className="col-5 px-4 d-flex justify-content-end" htmlFor="state">
            State Code
          </label>
          <input
            className="col-7 px-2"
            required
            onChange={handleChange}
            name="ShipDtls.Stcd"
            value={billData.ShipDtls?.Stcd}
          ></input>
        </div>
        <div className="row gx-0">
          <label className="col-5 px-4 d-flex justify-content-end" htmlFor="pin">
            Pin Code
          </label>
          <input
            className="col-7 px-2"
            type="number"
            required
            pattern="[1-9]{1}[0-9]{5}"
            onChange={handleChange}
            name="ShipDtls.Pin"
            value={billData.ShipDtls?.Pin}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
