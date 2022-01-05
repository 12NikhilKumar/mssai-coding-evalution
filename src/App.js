import logo from './logo.svg';
import './App.css';
import {v4 as uuid} from "uuid";
import NavBar from './component/navbar'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/allroutes';
import { Provider } from 'react-redux';
import {store} from './redux/store';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <NavBar/>
          <AllRoutes/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
