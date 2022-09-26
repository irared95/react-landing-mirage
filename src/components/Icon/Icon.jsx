import React from 'react';
import { icons } from "./icons";

const Icon = ({icon, width = '40px', height = '40px', ...rest}) => {
    const IconType = icons[icon]

    return (
        <IconType width={width} height={height} {...rest} />
    );
};

export default Icon;