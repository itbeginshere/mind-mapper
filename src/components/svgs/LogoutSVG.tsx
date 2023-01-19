import React from 'react';

const LogoutSVG = (props : React.SVGProps<SVGSVGElement>) => {
    
    const { 
        width = 35,
        height = 35,
        ...rest
    } = props;
    
    return (
        <svg width={width} height={height} {...rest} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z"/>
        </svg>
    );
}

export default LogoutSVG;