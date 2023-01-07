//here <T> is geneerics, recieves object generics way

const userInfoFunction = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 100000).toString();

    return { id, ...obj };
};

let user = userInfoFunction({
    name: 'Shohan',
    email: 'mshohanhasan@gmail.com',
});

console.log(user);
