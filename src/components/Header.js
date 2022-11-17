import "../styles/Header.css"
import Star from '../images/star.png'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'

function Header() {

    const [menuHide,setMenuHide] = useState(true);

    const handleMenuHide = () => setMenuHide(!menuHide);

    return (
        <div>
            <div className='headerContainer'>
                <img className='companyImage' src={Star} alt=''></img>
                <p className='myCompanyText'><b>To The Stars</b></p>
                <div className={menuHide ? 'headerLinksContainer' : 'headerLinksContainerActive'}>
                    <p className = 'headerLinks'><b>Home</b></p>
                    <p className = 'headerLinks'><b>About Us</b></p>
                    <p className = 'headerLinks'><b>Destinations</b></p>
                    <p className='loginBtn'><b>Login</b></p>
                </div>
                <div className="hamburger" onClick = {handleMenuHide}>
                    {menuHide ? <FaBars></FaBars> : <FaTimes></FaTimes>}
                </div>
            </div>
        </div>
    )
}

export default Header;