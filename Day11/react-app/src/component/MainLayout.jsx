import React from 'react'
import {Link,Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/counter">counter</Link>
                </li>
            </ul>
            <ul>
                <li><Link to="/image">image</Link></li>
            </ul>
        </nav>
        <Outlet/>
        
    </div>
  )
}

export default MainLayout