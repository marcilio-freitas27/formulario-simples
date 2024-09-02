var pdfText = require('pdf-text')

var pathToPdf = "pdf/download.pdf";

pdfText(pathToPdf, function(err, chunks) {
  //chunks is an array of strings
  //loosely corresponding to text objects within the pdf

  //for a more concrete example, view the test file in this repo
})

//or parse a buffer of pdf data
//this is handy when you already have the pdf in memory
//and don't want to write it to a temp file
var fs = require('fs')
var buffer = fs.readFileSync(pathToPdf)
pdfText(buffer, function(err, chunks) {

})
