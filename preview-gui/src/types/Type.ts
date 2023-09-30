export interface Invoice {
  DocDtls: DocDetails;
  BuyerDtls: BuyerDetails;
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

export interface DocDetails {
  No: string;
  Dt: string;
}

export interface BillProps {
  bill: Invoice;
}

export interface ItemProps {
  item: Item;
}

export interface EditFormProps {
  showEditForm: boolean;
}
