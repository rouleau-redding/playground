// setTimeout(() => {console.log('Two secpnds are up') }, 2000)

// const names = ['Andrew','Phil','Jess']
// const shortNames = names.filter((name) => name.length <=4)
// console.log(shortNames)

// const geoCode = (address, callback) => {
// setTimeout(() => {
//     const data = {
//         latidute: 0,
//         longitude: 0
//     }
//     callback(data)
// },2000)
// }
// geoCode('philadelphia', (data) => console.log(data))


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (x, y, callback) => {
    setTimeout(() =>  callback(x + y)
, 2000)
}
add(1, 4, (sum) => console.log(sum))
