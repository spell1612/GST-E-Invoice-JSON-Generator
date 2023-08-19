import fs from 'fs';
import path from 'path';
import os from 'os';
import {
    namePattern,
    addressPattern,
    mobPattern,
    multiLineSpace,

} from './bill-specifics/bill-regex.js';


const desktopPath = path.join(os.homedir(), 'Desktop');
const filePath = desktopPath + '\\' + process.env.BILL_FILE;


const matchPattern = (bill, pattern) => {
    const match = bill.match(pattern);
    return match ? match[1].trim() : "Not found";
}


const parseBillDetails = (billData) => {
    return billData.map(bill => ({
        name: matchPattern(bill, namePattern),
        address: matchPattern(bill, addressPattern).split(multiLineSpace).join(','),
        phone: matchPattern(bill, mobPattern),
    }))
}


export default () => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const billData = data.trim().split(process.env.SPLIT_BILLS_BY).filter(i => i);
        const billDetails = parseBillDetails(billData);
        console.log('File content:', billDetails);
    });
}