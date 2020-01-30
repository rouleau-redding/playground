const fs = require('fs')


// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())

var info = dataBuffer.toString()
const parseData = JSON.parse(info)
console.log(parseData.name)
parseData.name = 'Phil'
parseData.age = '55'
console.log(parseData.name)
info = JSON.stringify(parseData)

console.log(info)
fs.writeFileSync('1-json.json',info)
