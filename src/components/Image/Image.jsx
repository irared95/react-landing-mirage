import React from 'react';
import { images } from "./images";
import './image.scss'

const Image = ({image, ...rest}) => {
    const imageSrc = images[image]

    return (
        <div className={'image-wrap'}>
            <img alt={image} src={imageSrc} {...rest} />
        </div>
    );
};

export default Image;