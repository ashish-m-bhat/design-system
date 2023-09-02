import React from 'react';
import Proptypes from 'prop-types';

const Header = ({ level, children }) => {

    const renderHeaderContent = (children) => {
        switch(level) {
        case 2:
        return <h2>{children}</h2>
        case 3:
        return <h3>{children}</h3>
        case 4:
        return <h4>{children}</h4>
        case 5:
        return <h5>{children}</h5>
        case 6:
        return <h6>{children}</h6>
        case 1:
        default:
            return <h1>{children}</h1>
        }
    }
 return (
    <header>
        {renderHeaderContent(children)}
    </header>
 );
 }

export default Header;

Header.proptypes = {
    level: Proptypes.oneOf([1, 2, 3, 4, 5, ]),
    children: Proptypes.node.isRequired
}
