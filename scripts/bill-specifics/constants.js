import path from 'path';
import os from 'os';

export const desktopPath = path.join(os.homedir(), 'Desktop');

export const eInvoiceConstants = {
    supplyTypeCode: 'B2B',
    igstOnIntra: 'NO',
    documentType: 'Tax Invoice',
    buyerPos: 'Kerala',
    buyerState: 'Kerala',
};

export const customerDetailStartingRow = 5;

export const customerDetailsColumn = {
    supplyTypeCode: 'A',
    igstOnIntra: 'D',
    documentType: 'E',
    buyerPos: 'K',
    buyerState: 'P',
    invoiceNo: 'F',
    name: 'I',
    address1: 'L',
    address2: 'N',
    pin: 'O',
    phone: 'Q',
    buyerGst: 'H',
    date: 'G',
    totalTaxable: 'AG',
    cgst: 'AI',
    sgst: 'AH',
    totalAmount: 'AP',
    roundOff: 'AO',
};