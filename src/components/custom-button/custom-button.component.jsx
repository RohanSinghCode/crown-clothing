import React from 'react';


import './custom-button.style.scss';


const CustomButton = ({children,isGoogleSignIn,...otherPorps}) => (
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}
     {...otherPorps}>
        {children}
    </button>
)

export default CustomButton;