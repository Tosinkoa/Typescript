// class User {
//     email: string
//     name: string
//     private readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//         this.city
//     }
// }

class User {
    protected _courseCount = 1

    readonly city: string = ""
    constructor(public email: string, public name: string) {
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `applle${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const paul = new User("p@p.com", "paul")
// paul.city

