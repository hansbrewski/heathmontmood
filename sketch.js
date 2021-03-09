let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  //table = loadTable('assets/moodhc.csv', 'csv', 'header');
  //the file can be remote
  table = loadTable("https://docs.google.com/spreadsheets/d/e/2PACX-1vTi9r6JUczx2haKxDB4PtGWLczkkQ_8hJsqlfs_xhEpxIRghbx7kj0sysKJvt2Z6VNNlr_iDUINT579/pub?gid=1312270699&single=true&output=csv","csv", "header");
}

function setup() {
  createCanvas(500,400);
  //count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getColumn('name'));
  //["Goat", "Leopard", "Zebra"]

  //cycle through the table
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
  for(let i = 0; i < table.getRowCount(); i++){
  textSize(30);  text(table.getString(i,1),random(width-30)+30,random(height-30)+30);
  }
}
