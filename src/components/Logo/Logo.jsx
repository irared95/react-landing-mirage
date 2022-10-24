import React from "react";
import './logo.scss'
import Image from "../../components/Image";

const Logo = () => {
    return (
        <a  href="#" className={'logo'}>
            <Image image={'logo'} alt={'logo'}/>
        </a>
    )
}

export default Logo