function getJsonContent() {
  var json = {}
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadSheet.getSheets();
  sheets.forEach(function(sheet){
    var sheetName = sheet.getName()
    json[sheetName] = []
    var data = sheet.getDataRange().getValues()
    data.forEach(function(row, index){
      if (index === 0) return
      var datum = {}
      row.forEach(function(cell, column){
        datum[data[0][column]] = cell
      })
      json[sheetName].push(datum)
    })
  })
  DriveApp.createFile("test.json", JSON.stringify(json))
}
