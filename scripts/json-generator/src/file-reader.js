import fs from 'fs';
import parseBillDetails from './parser.js';
import { exists } from '../../bill-specifics/constants.js';


export default async (filePath) => {
    try {
        console.log('Reading from ', filePath);
        const billData = (await fs.promises.readFile(filePath, 'utf8')).trim().split(process.env.SPLIT_BILLS_BY).filter(exists);
        const billDetails = parseBillDetails(billData);
        return billDetails.sort((billA, billB) => {
            return billA.invoiceNo.split('/').slice().pop() - billB.invoiceNo.split('/').slice().pop();
        })
    } catch (err) {
        console.error('Error in file reader:', err);
    }
}