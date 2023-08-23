import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <h1>RTK Query</h1>
    </Provider>
  );
};

export default App;
