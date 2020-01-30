var https = require('https');
const url = 'https://api.darksky.net/forecast/8da46b02776b83f062ab414c2bb403b7/40,-75'
const request = https.request(url,(response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    } )
    response.on('end', () => {
        const jsonData = JSON.parse(data) 
        console.log(jsonData)
    })
} )
request.on('error', (error) => {
    console.log(error)
})
request.end()
