import React from 'react';


import './custom-button.style.scss';


const CustomButton = ({children,isGoogleSignIn,inverted,...otherPorps}) => (
    <button className={`${inverted?'inverted':''} custom-button`}
     {...otherPorps}>
        {children}
    </button>
)

export default CustomButton;