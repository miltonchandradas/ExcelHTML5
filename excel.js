const downloadExcel =  (tableID, hyperlinkID, filename) => {
    let dataType = "application/vnd.ms-excel";

    // Get table element
    let table = document.getElementById(tableID);
    let tableHTML = table.outerHTML.replace(/ /g, "%20");

    // Get hyperlink element
    let hyperlink = document.getElementById(hyperlinkID);

    if (navigator.msSaveOrOpenBlob) {
        let blob = new Blob(["\ufeff", tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        hyperlink.href = `data:${dataType}, ${tableHTML}`;

        // Setting the file name
        hyperlink.download = filename;

        //triggering the function
        hyperlink.click();
    }
}

document.getElementById("downloadButton").addEventListener("click", downloadExcel("customersTable", "customersLink", "customers.xls"));