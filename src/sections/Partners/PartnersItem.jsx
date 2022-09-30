import React from 'react';
import './partners.scss'
import Image from "../../components/Image";

const PartnersItem = ({image}) =>{
    return(
        <li className={'partners__item'}>
            <Image image={image}/>
        </li>
    )
}

export default PartnersItem