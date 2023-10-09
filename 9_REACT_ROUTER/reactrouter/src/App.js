import logo from './logo.svg';
import './App.css';

// 1- config react router
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// components

import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// pages

import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/*2- links com react router*/}
      <Navbar/>
        {/* 9- search params */}
        <SearchForm></SearchForm>
        <Routes>
          <Route path='/' element={<Home/> }></Route>
          <Route path='/about' element={<About/> }></Route>
          {/*4- rota dinâmica */}
          <Route path='/products/:id' element= {<Product/>}></Route>
          {/*6 - Nested Route */}
          <Route path='/products/:id/info' element= {<Info/>}></Route>
          {/*7 - no match route */}
          <Route path='*' element={ <NotFound/> }></Route>
          {/* 9 - search */}
          <Route path='/search' element={ <Search/> }/>
          {/* 10 - redirect */}
          <Route path='/company' element={ <Navigate to='/about'/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
