var download = require('download-pdf')
 
var pdf = "https://matrix.centris.ca/Matrix/PrintPDF/4_par_page_courtier_Imp_rial_9294?c=AAEAAAD*****AQAAAAAAAAARAQAAAFUAAAAGAgAAAAQzMjYwBgMAAAABMwYEAAAAATEKBgUAAAAFMTU4NDQGBgAAAAUxNTg3Nw0CBgcAAAADMTEwDQoGCAAAAAI3Mw0CBgkAAAACMTAGCgAAAAEwCgYLAAAAATENBAYMAAAAATENHgYNAAAAATENCQYOAAAAATENCgYPAAAACMKLw4DDicONDQIL&L=2&AsSelf=0&PJO=0%7C0%7C0%7C0%7C0%7C2%7C0%7C0%7C%7C250"
 
var options = {
    directory: "./pdfs/",
    filename: "2014-11-7.pdf"
}
 
download(pdf, options, function(err){
    if (err) { console.log( err)} else {console.log('No errors')}
    
}) 