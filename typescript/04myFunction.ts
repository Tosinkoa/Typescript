const addTwo = (num: number): number => {
    return num + 2
    // return "hello"
}

const getUpper = (val: string) => {
    return val.toUpperCase()
}

const signUpUser = (name: string, email: string, isPaid: boolean) => {
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

let myValue = addTwo(5)
getUpper("Paul")
signUpUser("Paul", "tosinkoa1@gmail.com", false)
loginUser("h", "h@h.com")

const getValue = (myVal: number): boolean | string => {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}
const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

const consoleError = (errMsg: string): void => {
    console.log(errMsg)
}

const handleError = (errMsg: string): never => {
    throw new Error(errMsg)
}

export { }