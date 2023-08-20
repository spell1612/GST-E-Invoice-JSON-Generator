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
} from '../bill-specifics/bill-regex.js';


const matchPattern = (string, pattern) => {
    const match = string.match(pattern);
    return match ? match[1].trim() : "Not found";
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
            roundOff: roundOff.toFixed(2)
        }
    })
}

