import fs from 'fs';
import parseBillDetails from './parser.js';
import writeToXLSM from './xlsm-writer.js';
import { desktopPath } from '../bill-specifics/constants.js';


const filePath = desktopPath + '\\' + process.env.BILL_FILE;


export default async () => {
    try {
        console.log('Reading from ', filePath);
        const billData = fs.promises.readFile(filePath, 'utf8').trim().split(process.env.SPLIT_BILLS_BY).filter(i => i);
        const billDetails = parseBillDetails(billData);
        const sortedBillDetails = billDetails.sort((billA, billB) => {
            return billA.invoiceNo.split('/').slice().pop() - billB.invoiceNo.split('/').slice().pop();
        })
        console.log('parsed bill details:', sortedBillDetails);
        await writeToXLSM(sortedBillDetails);
    } catch (err) {
        console.error('Error in file reader:', err);
    }
}