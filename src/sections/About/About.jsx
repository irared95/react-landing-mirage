import React from 'react'
import './about.scss'
import Typography from '../../components/Typography';
import Button from "../../components/Button";
import Image from "../../components/Image";
import Slider from "../../components/Slider";
import AboutSlide from "./AboutSlide";

const About = ({subtitle, title, text, image, buttonText, reverse, slides}) => {
    console.log('slides', slides)

    const listSlides = slides && slides.map(({text, author, address}) => <AboutSlide text={text} author={author} address={address} /> )

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
                        {text && <div className={'about__text'}>
                            <Typography variant={'text'}>{text}</Typography>
                        </div>}
                        {slides && <div><Slider slides={listSlides}/></div>}
                        {buttonText && <Button variant={'contained'} icon={'arrow'} iconWidth={'25px'} iconHeight={'25px'}>{buttonText}</Button>}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About