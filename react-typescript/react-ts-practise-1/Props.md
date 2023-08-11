# Passing the props types

### Add Props Types

```js
type Skill = {
    title: string,
    id: number,
};

type PersonProps = {
    name: string,
    age: number,
    skills: Skill[],
    isActive: boolean,
    address: {
        city: string,
        country: string,
    },
};

type StatusProps = {
    status: 'LOADING' | 'SUCCESS' | 'FAILED',
};

const Person = ({ name, age, skills, isActive, address }: PersonProps) => {
    return (
        <div>
            <h1>Hello, {name}! </h1>
        </div>
    );
};

export default Person;
```

### Import Component with props

```js
import Person from './components/Person';

const person1 = {
    name: 'shohan',
    age: 23,
    skills: [
        { id: 1, title: 'js' },
        { id: 2, title: 'ts' },
    ],
    isActive: true,
    address: {
        city: 'pabna',
        country: 'bd',
    },
};

const App = () => {
    return (
        <div className='app'>
            <Person {...person1} />
        </div>
    );
};

export default App;
```

### Another Props Example

```js
type HeadingProps = {
    children: React.ReactNode,
};

const Heading = (props: HeadingProps) => {
    return <div>{props.children}</div>;
};

export const Typography = ({ children }: { children: string }) => {
    return <h1>{children}</h1>;
};

export default Heading;
```

### Event Props

```js
// Button Event
type BtnProps = {
    children: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const Button = ({ handleClick, children }: BtnProps) => {
    return <button onClick={(event) => handleClick(event)}>{children}</button>;
};

export default Button;

// Input Event
type InputProps = {
    value: string,
    placeholder: string,
    type: 'text' | 'email' | 'number',
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const Input = ({ handleChange, value, type, placeholder }: InputProps) => {
    return (
        <input
            onChange={handleChange}
            value={value}
            type={type}
            placeholder={placeholder}
        />
    );
};
```

### Style Props

```js
type StyleProps = {
    styles: React.CSSProperties,
};
```
