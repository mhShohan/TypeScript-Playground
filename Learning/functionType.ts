export const myFunc = (
    name: string,
    age: number,
    country: string = 'Bangladesh',
    post?: 'string'
): string => {
    return `Hi, I am ${name} and ${age} years old. Country ${country} `;
};

console.log(myFunc('Shohan', 24));

const fullName = (firstName: string, lastName: string) => {
    console.log(`Fullname: ${firstName} ${lastName}`);
};

export default fullName;
