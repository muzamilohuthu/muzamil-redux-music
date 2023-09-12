
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {store } from './redux/Store';

function App() {
  return (
    <div>
      <Provider store ={ store}>
     <Home />
     </Provider>
    </div>
  );
}

export default App;
