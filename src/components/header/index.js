import React from 'react'
import '../header/style.scss';
import Logo from '../../assets/logo'
 
const Header = (props)=> {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            
        </header>
    )
}
export default Header;