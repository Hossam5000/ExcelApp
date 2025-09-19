//functions
// async function generateExcel() {
// const workbook = new ExcelJS.Workbook();
// const worksheet = workbook.addWorksheet("Inspection Data");

// worksheet.columns = [
//     { header: "ID", key: "id", width: 10 },
//     { header: "Status", key: "status", width: 15 },
//     { header: "Timestamp", key: "timestamp", width: 25 }
// ];

// worksheet.addRow({ id: 1, status: "Passed", timestamp: new Date().toISOString() });
// worksheet.addRow({ id: 2, status: "Failed", timestamp: new Date().toISOString() });

// const buffer = await workbook.xlsx.writeBuffer();
// const blob = new Blob([buffer], {
//     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// });

// const url = URL.createObjectURL(blob);
// const anchor = document.createElement("a");
// anchor.href = url;
// anchor.download = "inspection_report.xlsx";
// anchor.click();

// // Clean up
// URL.revokeObjectURL(url);
// }

// vars & cons
const btnExport = document.getElementById("btn-export");

// functions
async function generateExcel() {
    // create the workbook and its worksheets
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("new sheet");
    const worksheet2 = workbook.addWorksheet("second sheet");
    const date = new Date().toLocaleDateString("en-uk");
    // assign some properties
    workbook.creator = "Hossam";

    // create the columns
    worksheet.columns = [
        { header: "firstCol", key: 1, width: 10, },
        { header: "secondCol", key: 2, width: 20, },
        { header: "thirdCol", key: 3, width: 30 },
        { header: date, key: 4, width: 40 },
    ];

    // create the rows
    worksheet.addRows([
        { 1: "one", 2: "mobile", 3: "pieces" },
        { 1: "hello", 2: "world", 3: "test" },
    ]);

    const columns2 = worksheet2.columns = [
        { header: "first", key: 1 },
        { header: "second", key: 2 },
    ];
    const row = worksheet2.getRow(2);
    // assign row values
    row.values = {
        1: "hello",
        3: "third",
        2: "world",
    }

    row.commit();
    // get cells
    worksheet.getCell('C1').note = "this is a new note";
    const rows = worksheet.getRows(3, 2);
    console.log(worksheet2);

    // convert to a downloadable file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report file ${date}.xlsx`;
    a.click();

    URL.revokeObjectURL(url);
};

// events
btnExport.addEventListener("click", generateExcel);
