import readBillDetails from './src/file-reader.js'
import writeToJSON from './src/json-writer.js';
import { desktopPath } from '../bill-specifics/constants.js';


const filePath = desktopPath + '\\' + process.env.BILL_FILE;


export default async () => {
    try {
        const billDetails = await readBillDetails(filePath)
        await writeToJSON(billDetails);
    } catch (err) {
        console.error('Error in file reader:', err);
    }
}