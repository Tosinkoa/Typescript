interface interfaceUser {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface interfaceUser {
    githubToken: string
}

interface interfaceAdmin extends interfaceUser {
    role: "admin" | "ta" | "learner" | "editor"
}

const paul: interfaceAdmin = {
    dbId: 33, role: "admin", email: "tosinkoa1@gmail.com", userId: 222111, githubToken: "github", startTrail: () => {
        return "good"
    },
    getCoupon: (name: "Paul", off: 30) => {
        return 10
    }
}

paul.email = "p@pa.com"
// paul.dbId = 33