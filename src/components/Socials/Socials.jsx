import React from 'react';
import Icon from "../Icon";
import "./social.scss"

const Social = ({icon,link,width,height,...rest}) => {
    return (
        <a className={'social'} href={link} target={'_blank'} {...rest}>
            <Icon icon={icon} width={width} height={height}/>
        </a>
    );
};

export default Social;