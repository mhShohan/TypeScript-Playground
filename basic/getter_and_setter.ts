class ModuleFinished {
    private count = 5

    constructor() {
    }

    get finishedModule(): number{
        return  this.count
    }

    set addModule(val: number){
        this.count =  this.count +  val
    }
}

const course = new ModuleFinished()

console.log(course.finishedModule)
console.log(course.addModule = 1)
console.log(course.addModule = 2)
console.log(course.finishedModule)