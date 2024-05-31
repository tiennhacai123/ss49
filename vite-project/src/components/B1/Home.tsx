import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>Day la trang chu <br />
    <div>
      <Link to={'/homeB6'}>HomeB6</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={'/contactB6'}>ContactB6</Link>
      <Outlet></Outlet>      
    </div>
    <br />
    <div>
      <NavLink to={'/homeB7'}>HomeB7</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <NavLink to={'/product'}>Product</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <NavLink to={'/detail'}>Detail</NavLink>
      <Outlet></Outlet>
      <br />
    </div>
    <nav className='b8'>
      <NavLink to={'/admin'}>AdminB8</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <NavLink to={'/account'}>AccountB8</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <NavLink to={'/productB8'}>ProductB8</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </nav>
    <nav>
      <Link to={''}>CustomLinkB9</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <Link to={'./home-page'}>HomePage</Link>
    </nav>
    </div>

  )
}
