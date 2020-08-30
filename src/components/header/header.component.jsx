import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.componenet';
import {auth} from '../firebase/firebase.util';
import {connect} from 'react-redux';

import {ReactComponent as Logo } from '../../assets/crown.svg'

import './header.style.scss';

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin/'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden?null:<CartDropdown />
        }
            
    </div>
)

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);