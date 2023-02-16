import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
return (
<>
    <div className='header'>
        <div className='logo'>
           <Link to='/'><h3>Main Logo</h3></Link>
        </div>
        <div className='navBar'>
        <ul>
            <li>
                <Link to='/' >Home</Link> 
            </li>

            <li>  
                <Link to='/about' >About</Link> 
            </li>

            <li>  
                <Link to='/api' >API</Link> 
            </li>

            <li>  
                <Link to='/make_api' >Make API</Link> 
            </li>
            
        </ul>
        </div>
    </div>
</>
)
}
