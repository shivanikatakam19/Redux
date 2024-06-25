import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import IceCreamContainer from './components/iceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="w-100 row mt-4">
        <div className="col-6 ps-5">
          <h4>Example for Synchronous Actions - Bakery</h4>
          <CakeContainer />
          {/* <HooksCakeContainer noOfCakes={10} /> */}
          <IceCreamContainer />
          <ItemContainer cake />
          <ItemContainer />
        </div>
        <div className='col-6'>
          <h4>Example for Async Actions</h4>
          <UserContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
