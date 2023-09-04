import {
    desktopPath,
} from '../bill-specifics/constants.js';
import fs from 'fs';
import jsonTemplate from '../assets/E-INVOICE_V2.json' assert { type: 'json' };

const writeFilePath = desktopPath + '\\' + process.env.JSON_FORM_B_FILE;


export default async (billDetails) => {

    try {
        const jsonContent = billDetails.map((bill) => {
            const { DocDtls, BuyerDtls, ValDtls, ItemList } = jsonTemplate[0];
            return {
                ...jsonTemplate[0],
                DocDtls: { ...DocDtls, No: bill.invoiceNo, Dt: bill.date.split("-").join("/") },
                BuyerDtls: {
                    ...BuyerDtls,
                    Gstin: bill.buyerGst,
                    LglNm: bill.name,
                    Addr1: bill.address1,
                    Loc: bill.address2,
                    Pin: parseInt(bill.pin) || null,
                    Ph: bill.phone,
                },
                ValDtls: {
                    ...ValDtls,
                    AssVal: parseFloat(bill.totalTaxable),
                    CgstVal: parseFloat(bill.cgst),
                    SgstVal: parseFloat(bill.sgst),
                    RndOffAmt: parseFloat(bill.roundOff),
                    TotInvVal: parseFloat(bill.totalAmount),
                },
                ItemList: bill.itemList.map((billItem) => {
                    return {
                        ...ItemList[0],
                        SlNo: billItem.slNo,
                        PrdDesc: billItem.item,
                        HsnCd: billItem.hsnCode,
                        Qty: parseFloat(billItem.qty),
                        UnitPrice: parseFloat(billItem.unitPrice),
                        TotAmt: parseFloat(billItem.grossValue),
                        AssAmt: parseFloat(billItem.taxableValue),
                        GstRt: parseFloat(billItem.gstRate),
                        CgstAmt: parseFloat(billItem.cgstAmount),
                        SgstAmt: parseFloat(billItem.sgstAmount),
                        TotItemVal: parseFloat(billItem.totalAmount),
                    }
                })
            }
        })
        console.log('\n\nwriting to ', writeFilePath);
        await fs.promises.writeFile(writeFilePath, JSON.stringify(jsonContent, null, 4));
        console.log(`\n\nSUCCESSFULLY WRITTEN`);
    } catch (error) {
        console.error('JSON writer error', error);
    }

}