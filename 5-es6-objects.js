var name = 'Andrew'
var age = 27
var user = {
    name ,
    age,
    location: 'Montreal'
}

 // console.log(user)

// object destructuring

const product = {
    label: 'Red notebook',
    stock: 201,
    price : 3,
    salePrice: undefined,
    rating : 4.3
}
const transaction = (type , {label = 'No Label' ,stock = 0} = {label: 'no Label', stock:'No Stock'}) => {
   console.log(type ,label, stock)

}
transaction ('order', product)
