import { shippingDetails } from "../utils/constants";

export interface Invoice {
  DocDtls: DocDetails;
  BuyerDtls: BuyerDetails;
  ShipDtls?: ShippingDetails | null;
  ValDtls: ValueDetails;
  ItemList: Item[];
}

export interface ValueDetails {
  AssVal: number;
  CgstVal: number;
  SgstVal: number;
  RndOffAmt: number;
  TotInvVal: number;
}

export interface Item {
  SlNo: string;
  PrdDesc: string;
  HsnCd: string;
  Qty: number;
  UnitPrice: number;
  TotAmt: number;
  AssAmt: number;
  GstRt: number;
  CgstAmt: number;
  SgstAmt: number;
  TotItemVal: number;
}

export interface BuyerDetails {
  Gstin: string;
  LglNm: string;
  Addr1: string;
  Loc: string;
  Ph: string;
  Pin: number;
}

type ShippingDetails = typeof shippingDetails;

export interface DocDetails {
  No: string;
  Dt: string;
}

export interface BillDisplayProps {
  bill: Invoice;
  index: number;
  saveBillData: (arg0: number, arg1: Invoice) => void;
}

export interface BillProps extends BillDisplayProps {
  closeEditForm: () => void;
}

export interface ItemProps {
  key: number;
  index: number;
  item: Item;
  handleProduct: (arg0: string, arg1: string | number, arg2: number) => void;
}

export interface ItemRowProps {
  key: number;
  item: Item;
}

export interface ShippingFormProps {
  billData: Invoice;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ShippingDetailsProps {
  ShipDtls: ShippingDetails | undefined;
}

export interface EditFormProps {
  showEditForm: boolean;
}

export interface ToolbarProps {
  exportData: () => void;
}
