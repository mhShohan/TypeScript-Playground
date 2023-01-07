interface TakePhoto{
    cameraMode: string,
    filter: string,
    brust: number
}

//implements of properties in class
interface  CountLikes{
    likes: number
}

//implements of methods in Class
interface  Story {
    createStory(): void
}

class Instagram implements TakePhoto,Story,CountLikes{
    constructor(
            public cameraMode: string,
            public filter: string,
            public  brust: number,
            public  likes: number
    ) {}

    createStory():void{
        console.log()
    }
}