import React from 'react';
import './services.scss'
import Typography from "../../components/Typography";
import Icon from "../../components/Icon";
import Button from "../../components/Button";

const ServicesItem = ({title, text, icon}) => {
    return (
        <li className={`services__item`}>
            <div className={'services__item-icon'}>
                <Icon icon={icon}/>
            </div>
            <div className={'services__item-title'}>
                <Typography variant={'title4'} textAlign={'center'} wordBreak={'break-word'}>{title}</Typography>
            </div>
            <div className={'services__item-text'}>
                <Typography variant={'text'} textAlign={'center'}>{text}</Typography>
            </div>
            <div className="services__item-button">
                <Button link={'#'} variant={'text'} icon={'arrowRight'} iconWidth={'12px'} iconHeight={'12px'}>Learn more</Button>
            </div>
        </li>
    );
};

export default ServicesItem;