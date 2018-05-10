let csvToJson = require('convert-csv-to-json');

let csvinputfile = 'customer-data.csv'; 
let jsonoutputfile = 'customerjson.json';

csvToJson.generateJsonFileFromCsv(csvinputfile,jsonoutputfile);