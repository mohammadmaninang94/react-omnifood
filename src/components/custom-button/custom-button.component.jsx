import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ children, isButton, ...props }) => {
    if (isButton) {
        return (
            <button {...props}>{children}</button>
        )
    }else{
        return (
            <a {...props}>{children}</a>
        )
    }
};

export default CustomButton;