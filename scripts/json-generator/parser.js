import {
    namePattern,
    addressPattern,
    mobPattern,
    multiLineSpace,
    pinCodePattern,
    gstPattern,
    invoiceNumberPattern,
    datePattern,
    totalTaxablePattern,
    cgstPattern,
    sgstPattern,
    totalAmountPattern,
    billItemSpacer,
} from '../bill-specifics/bill-regex.js';
import { billItemNames, itemJsonFieldNames } from '../bill-specifics/bill-constants.js';


const matchPattern = (string, pattern) => {
    const match = string.match(pattern);
    return match ? match[1].trim() : "Not found";
}

const getItemList = (bill) => {
    const lines = bill.split('\n');
    const itemRows = [];
    let slNo = 0;
    for (const line of lines) {
        let item, itemDetailsLine;
        const isBillItem = billItemNames.some((billItem) => {
            if (line.includes(billItem)) {
                item = billItem;
                const startIndex = line.indexOf(item);
                itemDetailsLine = line.substring(startIndex + item.length + 1).trim();
                slNo++;
                return true;
            }
            return false
        })

        if (isBillItem) {
            const itemDetails = itemDetailsLine.split(billItemSpacer);
            // Map and insert the details of each item as an object, 
            // with keys corresponding to the GST JSON schema
            const itemObj = itemDetails.reduce((prevObject, detailItem, index) => {
                prevObject[itemJsonFieldNames[index]] = detailItem;
                return prevObject;
            }, { slNo, item });
            itemRows.push(itemObj);
        }
    }
    return itemRows
}


export default (billData) => {
    return billData.map((bill) => {
        const address = matchPattern(bill, addressPattern).split(multiLineSpace).join(',').split(',')
        const lastAddress = address.pop();
        const address1 = address.shift();
        const pin = matchPattern(lastAddress, pinCodePattern);
        const address2 = lastAddress.replace(pinCodePattern, '');
        const totalTaxable = matchPattern(bill, totalTaxablePattern);
        const cgst = matchPattern(bill, cgstPattern);
        const sgst = matchPattern(bill, sgstPattern);
        const totalAmount = matchPattern(bill, totalAmountPattern);
        const roundOff = parseFloat(totalAmount) - (parseFloat(totalTaxable) + parseFloat(cgst) + parseFloat(sgst));
        return {
            invoiceNo: matchPattern(bill, invoiceNumberPattern),
            name: matchPattern(bill, namePattern),
            address1,
            address2,
            pin,
            phone: matchPattern(bill, mobPattern),
            buyerGst: matchPattern(bill, gstPattern),
            date: matchPattern(bill, datePattern),
            totalTaxable,
            cgst,
            sgst,
            totalAmount,
            roundOff: roundOff.toFixed(2),
            itemList: getItemList(bill),
        }
    })
}

