abstract class abstractTakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void

    getReelTime(): number {
        // Some complex calculation
        return 8
    }
}



class Insta extends abstractTakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }

}

const pa = new Insta("test", "test", 3)
pa.getReelTime()