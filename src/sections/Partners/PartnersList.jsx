import React from 'react';
import PartnersItem from "./PartnersItem";

const PartnersList = ({list}) => {
    return (
        <ul className={'partners__list'}>
            {list.map(({image}, index) => <PartnersItem key={index} image={image} />)}
        </ul>
    );
};

export default PartnersList;