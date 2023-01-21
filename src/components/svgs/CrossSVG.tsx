import React from 'react';

const CrossSVG = (props : React.SVGProps<SVGSVGElement>) => {

    const {
        width = 35,
        height = 35,
        ...rest
    } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" {...rest} xmlns="http://www.w3.org/2000/svg">
            <line x1="19" y1="19" x2="5" y2="5" strokeWidth={2} strokeLinecap={'round'}></line>
            <line x1="19" y1="5" x2="5" y2="19" strokeWidth={2} strokeLinecap={'round'} strokeLinejoin={'round'}></line>
        </svg>
    )
}

export default CrossSVG;