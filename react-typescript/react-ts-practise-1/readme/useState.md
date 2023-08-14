# Types of useState

### Type Inference

```js
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [active, isActive] = useState(true);
```

### Types for future value

```js
type StateTypes = {
    name: string,
    email: string,
};

// const [user, setUser] = useState<StateType | null>(null);
```

### Type Assertion

```js
type StateTypes = {
    name: string,
    email: string,
};

// const [user, setUser] = useState<StateType>({} as StateTypes);
```
