import ExcelJS from 'exceljs';
import {
    customerDetailsColumn,
    eInvoiceConstants,
    customerDetailStartingRow,
    desktopPath,
} from '../bill-specifics/constants.js';


const filePath = desktopPath + '\\' + process.env.JSON_FORM_B_FILE;


export default async (billDetails) => {

    try {
        const workbook = new ExcelJS.Workbook();
        console.log('Reading from ', filePath);
        await workbook.xlsx.readFile(filePath);

        console.log('Making edits to ', process.env.SHEET_A);
        const customerDetailsSheet = workbook.getWorksheet(process.env.SHEET_A);

        for (const [index, customer] of billDetails.entries()) {
            for (const key in { ...customer, ...eInvoiceConstants }) {
                if (Object.hasOwnProperty.call(customer, key)) {
                    const currentRow = customerDetailStartingRow + index + 1
                    const cell = customerDetailsSheet.getCell(`${customerDetailsColumn[key]}${currentRow}`);
                    cell.value = customer[key];
                }
            }
        }

        // console.log('Making edits to ', process.env.SHEET_B);
        // const itemDetailsSheet = workbook.getWorksheet(process.env.SHEET_B);

        console.log('writing to ', filePath);
        await workbook.xlsx.writeFile(filePath);
        console.log(`Data modified and saved to ${process.env.JSON_FORM_B_FILE}`);
    } catch (error) {
        console.error('XLSM error', err);
    }

}