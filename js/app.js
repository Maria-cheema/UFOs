// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear out any existing data
  tbody.html("");
}

// add for each function
data.forEach((dataRow) => {
//create a variable that will append a row to the table body
  let row = tbody.append("tr");
   // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}
 


