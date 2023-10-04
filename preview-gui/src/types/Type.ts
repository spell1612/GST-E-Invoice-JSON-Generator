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
  index: number;
  showEditForm?: () => void;
  saveBillData: (arg0: number, arg1: Invoice) => void;
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

export interface EditFormProps {
  showEditForm: boolean;
}

export interface ToolbarProps {
  exportData: () => void;
}
