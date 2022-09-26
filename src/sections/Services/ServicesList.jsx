import React from 'react';
import ServicesItem from "./ServicesItem";

const ServicesList = (props) => {
    return (
        <ul className={'services__list'}>
            {props.list.map(({text, title, icon}, index) => <ServicesItem key={index} title={title} text={text} icon={icon} />)}
        </ul>
    );
};

export default ServicesList;