import React from 'react';

import './custom-link.styles.css';

const CustomLink = ({ children, ...props }) => (
    <a {...props}>{children}</a>
);

export default CustomLink;