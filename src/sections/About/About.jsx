import React from 'react'
import './about.scss'
import Typography from '../../components/Typography';
import Button from "../../components/Button";
import Image from "../../components/Image";

const About = ({subtitle, title, text, image, buttonText, reverse}) =>{
    return (
        <section className={'about'}>
            <div className={'container'}>
                <div className={'about__wrapper'} style={reverse && {flexFlow: "row-reverse"}}>
                    <div className={'about__illustration'}>
                        <div className={'about__image'}>
                            <Image image={image}/>
                        </div>
                    </div>
                    <div className={'about__content'}>
                        {subtitle && <div className={'about__subtitle'}>
                             <Typography variant={'title2'}>{subtitle}</Typography>
                        </div>}
                        {title && <div className={'about__title'}>
                            <Typography variant={'title3'}>{title}</Typography>
                        </div>}
                        <div className={'about__text'}>
                            <Typography variant={'text'}>{text}</Typography>
                        </div>
                        {buttonText && <Button variant={'contained'} icon={'arrow'} iconWidth={'25px'} iconHeight={'25px'} reverse>{buttonText}</Button>}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About