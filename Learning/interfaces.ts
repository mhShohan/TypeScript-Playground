interface RectOpt {
    width: number;
    height: number;
}

function drawRectangle(option: RectOpt) {
    let { width, height } = option;
    console.log(`Rectangle width ${width} and height ${height}`);
}

drawRectangle({ width: 30, height: 40 });

// interface for class
interface UserInfo {
    userId: string;
    userName: string;
    email: string;
    age: number;

    userInfoFunc(): void;
}

class UserDetails implements UserInfo {
    constructor(
        public userId: string,
        public userName: string,
        public email: string,
        public age: number
    ) {}

    userInfoFunc() {
        console.log({
            id: this.userId,
            userName: this.userName,
            email: this.email,
            age: this.age,
        });
    }
}

let userArr: UserInfo[] = [];

const userNumber1 = new UserDetails(
    'afsasdfad',
    'mhshohan17',
    'mshohanhasan@gmail.com',
    24
);

userNumber1.userInfoFunc();
