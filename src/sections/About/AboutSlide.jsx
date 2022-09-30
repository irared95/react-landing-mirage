import React from 'react';
import Typography from "../../components/Typography";

const AboutSlide = ({text, author, address}) => {
    return (
        <div className={'about__reviews'}>
            <div className={'about__reviews-comment'}>
                <Typography variant={'text'}>{text}</Typography>
            </div>
            <div className={'about__reviews-author'}>
                <Typography variant={'title4'}>{author}</Typography>
            </div>
            <div className={'about__reviews-address'}>
                <Typography variant={'text'}>{address}</Typography>
            </div>
        </div>
    );
};

export default AboutSlide;