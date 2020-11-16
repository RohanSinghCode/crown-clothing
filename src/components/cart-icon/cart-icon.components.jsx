import React from 'react';
import { createStructuredSelector } from 'reselect';


import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';


import {ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';

import './cart-icon.style.scss';


const CartIcon = ({toggleCartHidden,itemCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoopingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    itemCount : selectCartItemsCount
})


const mapDispathToProps = dispatch =>({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispathToProps)(CartIcon);