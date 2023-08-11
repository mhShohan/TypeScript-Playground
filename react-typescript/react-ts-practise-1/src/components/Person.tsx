type Skill = {
    title: string;
    id: number;
};

type PersonProps = {
    name: string;
    age: number;
    skills: Skill[];
    isActive: boolean;
    address: {
        city: string;
        country: string;
    };
};

const Person = ({ name, age, skills, isActive, address }: PersonProps) => {
    return (
        <div>
            <h1>Hello, {name}! </h1>
            <h2>age:{age}</h2>
            <ul>
                {skills.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            {isActive ? 'Online' : 'Offline'}
            <p>
                {address.city}, {address.country}
            </p>
        </div>
    );
};

export default Person;
