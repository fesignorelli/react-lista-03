import React from 'react';

export default function Cor({ propsCor, children }) {
    const style = {
        color: propsCor ? 'yellow' : 'white',
        fontWeight: propsCor ? 'bold' : 'normal',
    };

    return <p style={style}>{children}</p>;
}
