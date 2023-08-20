import fs from 'fs';
import path from 'path';
import os from 'os';
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
} from './bill-specifics/bill-regex.js';


const desktopPath = path.join(os.homedir(), 'Desktop');
const filePath = desktopPath + '\\' + process.env.BILL_FILE;


const matchPattern = (string, pattern) => {
    const match = string.match(pattern);
    return match ? match[1].trim() : "Not found";
}


const parseBillDetails = (billData) => {
    return billData.map((bill) => {
        const address = matchPattern(bill, addressPattern).split(multiLineSpace).join(',').split(',')
        const lastAddress = address.pop();
        const address1 = address.shift();
        const pin = matchPattern(lastAddress, pinCodePattern);
        const address2 = lastAddress.replace(pinCodePattern, '');
        return {
            invoiceNo: matchPattern(bill, invoiceNumberPattern),
            name: matchPattern(bill, namePattern), 
            address1,
            address2,
            pin,
            phone: matchPattern(bill, mobPattern),
            buyerGst: matchPattern(bill, gstPattern),
            date: matchPattern(bill, datePattern),
            totalTaxable: matchPattern(bill, totalTaxablePattern),
            cgst: matchPattern(bill, cgstPattern),
            sgst: matchPattern(bill, sgstPattern),
            totalAmount: matchPattern(bill, totalAmountPattern),
        }
    })
}


export default () => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const billData = data.trim().split(process.env.SPLIT_BILLS_BY).filter(i => i);
        const billDetails = parseBillDetails(billData);
        const sortedBillDetails = billDetails.sort((billA, billB) => {
            return billA.invoiceNo.split('/').slice().pop() - billB.invoiceNo.split('/').slice().pop()
        })
        console.log('File content:', sortedBillDetails);
    });
}