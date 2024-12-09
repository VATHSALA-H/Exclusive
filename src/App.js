import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Products from './pages/Products';
import Prouductdetail from './pages/Prouductdetail';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
        <Router>
        <Helmet>
        <title>Exclusive</title>
        </Helmet>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/Products"  element={<Products/>} />
            <Route path="/Products/:id"  element={<Prouductdetail/>} />
        </Routes>

    </Router>
    </>
  );
}

export default App;