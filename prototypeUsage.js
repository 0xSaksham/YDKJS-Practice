var personDetails = {
    name:"Saksham Gupta",
    age: 21,
}


//Bank Entry 
var customerID = Object.create(personDetails)

customerID.IDNum = "21sakshamg"

console.log(customerID.IDNum)
console.log(personDetails)
console.log(customerID)