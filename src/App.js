import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './components/Products'
import Header from './components/header'


function App() {
  return (
    <div className="App">
      <Header />
      <Product />
    </div>
  );
}

export default App;
