import ExcelJS from "exceljs";

export async function readExcelData(path, sheetName, row, column) {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(path);

    const sheet = workbook.getWorksheet(sheetName);

    if (!sheet) {
        throw new Error(`Worksheet '${sheetName}' not found`);
    }
    return sheet.getRow(row).getCell(column).text;

}