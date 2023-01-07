abstract  class TakePhoto{
    constructor(
            public cameraMode: string,
            public filter: string
    ) {
    }
    //abstract methods => must apply in the inherited class
    abstract getModes():void

    // optional feature
    getReels():number{
        return  9
    }
}

class Instagram extends TakePhoto{
    constructor(
            public  cameraMode: string,
            public filter: string,
            public brust: number) {
        super(cameraMode, filter);
    }

    //abstract method
    getModes():void {
        console.log('Camera Modes')
    }
}

const day = new Instagram('front', 'blur', 3)

console.log(day)
console.log(day.getReels())
day.getModes()