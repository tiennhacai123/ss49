import React from 'react'
import './components/B7/b7.css';
import'./components/B8/b8.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/B1/Home'
import Contact from './components/B2/Contact'
import Login from './components/B3/Login'
import Register from './components/B4/Register'
import NotFound from './components/B5/NotFound'
import HomeB6 from './components/B6/Homeb6/HomeB6'
import ContactB6 from './components/B6/Contactb6/ContactB6'
import HomeB7 from './components/B7/HomeB7/HomeB7'
import Detail from './components/B7/Detail/Detail'
import Product from './components/B7/Product/Product'
import Admin from './components/B8/Admin/Admin';
import ProductB8 from './components/B8/ProductB8/ProductB8';
import Account from './components/B8/Account/Account';
import CustomLink from './components/B9/CustomLink';
import HomePage from './components/B9/HomePage';
import ListUser from './components/B10/ListUser';
import UserDetail from './components/B10/UserDetail';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home></Home>}>
          <Route path='/homeB6' element={<HomeB6></HomeB6>}></Route>
          <Route path='/contactB6' element={<ContactB6></ContactB6>}></Route>
          <Route path='/homeB7' element={<HomeB7></HomeB7>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
          <Route path='/detail' element={<Detail></Detail>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/productB8' element={<ProductB8></ProductB8>}></Route>
          <Route path='/account' element={<Account></Account>}></Route>

        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>          
        <Route path='/customlink' element={<CustomLink></CustomLink>}></Route>
        <Route path='/home-page' element={<HomePage></HomePage>}></Route>
        <Route path='/list-user' element={<ListUser></ListUser>}></Route>
        <Route path="/user-detail/:userId" element={<UserDetail />} />
      </Routes>
    </div>
  )
}
