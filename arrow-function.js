// const square = function(x) {
//     return x*x
// }
// const square = (x) => {
// return x * x
// }

// const square = (x) => x*x
// console.log(square(5))
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jean', 'Mike'],
    printGestList() {
        console.log('Gest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending : ' + this.name)
        }
        )

    }
}
event.printGestList()
