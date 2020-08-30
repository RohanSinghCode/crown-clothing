import React from 'react';

import {toggleCartHidden} from '../../redux/cart/cart.action';

import {ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';

import './cart-icon.style.scss';


const CartIcon = ({toggleCartHidden}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoopingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispathToProps = dispatch =>({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
});

export default connect(null,mapDispathToProps)(CartIcon);