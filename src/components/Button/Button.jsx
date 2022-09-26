import React from 'react';
import './button.scss'
import Icon from "../Icon";

//variant -> text, contained

const Button = ({children, variant = 'contained', icon, link, iconWidth, iconHeight, ...rest}) => {
    return (
        <Wrapper
            link={link}
            className={`button button-${variant}`}
            {...rest}
        >
            {children}

            {icon && <span className={'button__icon'}>
                <Icon icon={icon} width={iconWidth} height={iconHeight}/>
            </span>}
        </Wrapper>
    );
};

const Wrapper = ({link, children, ...rest}) => {
    if(link) return <a href={link} {...rest}>{children}</a>
    return (
        <button {...rest}>{children}</button>
    )
}

export default Button;