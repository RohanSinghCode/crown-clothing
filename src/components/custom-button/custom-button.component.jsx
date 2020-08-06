import React from 'react';


import './custom-button.style.scss';


const CustomButton = ({children,...otherPorps}) => (
    <button className='custom-button' {...otherPorps}>
        {children}
    </button>
)

export default CustomButton;