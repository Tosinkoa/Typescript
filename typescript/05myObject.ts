// const objectUser = {
//     name: "Paul",
//     email: "tosinkoa1@gmail.com",
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// let newUser = { name: "Paul", isPaid: false, email: "tosinkoa1@gmail.com" }

// createUser(newUser)

// function createCourse(): { name: string, price: number } {
//     return { name: "reactjs", price: 399 }
// }

// type objectUser = {
//     name: string
//     email: string
//     isActive: boolean
// }

// function createUser(user: objectUser): objectUser {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "", email: "", isActive: true })

// export { }

type objectUser = {
    readonly id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: objectUser = {
    id: "1234",
    name: "Paul",
    email: "tosinkoa1@gmail",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



myUser.email = "tosinkoa1@gmail.com"
// myUser.id = "2999"