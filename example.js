const ExcelJS = require("exceljs");

const processFile = async () => {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("Sample Employee Data - DEV.xlsx");
  const sheet = workbook.getWorksheet("Employee Data");

  const columnKeys = {
    A: 'gender',
    B: 'weeklyWorkingHours',
    C: 'currency',
    D: 'baseAnnualPay',
    E: 'bonusAnnualPay',
    F: 'country',
    G: 'upperManagement',
    H: 'department'
  };

  const columns = Object.keys(columnKeys);
  columns.forEach(columnKey => {
    const column = sheet.getColumn(columnKey);
    const values = column.values;
    for (let i = 0; i < values.length; i++) {
        console.log(values[i])
    }
  });
};

processFile();

console.log("ghello2");
