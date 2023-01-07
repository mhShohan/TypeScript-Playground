type Reg = {_id: string; name: string; email: string}

interface  User{
    readonly _id: string, // cannot manupulate
    name: string,
    email: string,
    age?: number, // optional
    getLogin(): boolean // methods
    getRegister(name: string, email: string): Reg
}



// Student interface extends User interface
interface Student extends  User{
    studentID: string,
    role: 'student'| 'teacher' | 'admin'
}

const studentOne: Student = {
    _id: 'fasdkfadk',
    name: 'Mehdi Hasan Shohan',
    email: 'mh@shohan.com',
    age: 23,
    getLogin():boolean{return true},
    getRegister(name: string, email: string): Reg{
        return {_id: 'adhakdfa', name, email}
    },
    studentID : 'afaksdha',
    role: 'student'
}


console.log(studentOne)