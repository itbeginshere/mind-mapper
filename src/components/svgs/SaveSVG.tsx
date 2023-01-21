import React from 'react';

const SaveSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const {
        width = 35,
        height = 35,
        ...rest
    } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest} viewBox="0 0 24 24">
            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
        </svg>
    )
}

export default SaveSVG;