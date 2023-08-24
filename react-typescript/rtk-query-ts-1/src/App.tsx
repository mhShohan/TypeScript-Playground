import { Provider } from 'react-redux';
import { store } from './store/store';
import Posts from './components/Posts';

const App = () => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
};

export default App;
