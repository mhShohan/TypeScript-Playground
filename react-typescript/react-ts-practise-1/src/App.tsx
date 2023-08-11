import Heading, { Typography } from './components/Heading';
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
            <br />
            <br />
            <Heading>
                <Typography>MH Shohan</Typography>
            </Heading>
        </div>
    );
};

export default App;
