
//Custom Types
type User = {
    readonly  _id: string; //cannot manupulate
    name: string;
    email: string;
    isActive: boolean;
    age?: number; // optional
};


type firstName = {
    fName: string
}
type midName = {
    mName: string
}
type lastName = {
    lName: string
}

//combine the types
type fullName = firstName & midName & lastName

