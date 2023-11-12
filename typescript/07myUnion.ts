let score: number | string | boolean = 33

score = 44
score = "55"
score = false

type unionUser = {
    name: string
    id: number
}

type unionAdmin = {
    username: string
    id: number
}

let paul: unionUser | unionAdmin = { name: "Paul", id: 344 }

paul = { username: "Paulliano", id: 392 }

// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") id.toLowerCase()

    if (typeof id === "number") id + 2
}

//array

const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["1", "2", "3", "4"]
const data3: (string | number | boolean)[] = ["1", "2", "3", 4, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"