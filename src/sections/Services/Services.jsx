import React from 'react'
import './services.scss'
import Typography from '../../components/Typography';
import ServicesList from "./ServicesList";

const servicesData = [
    {title: 'Design', text: 'a plan or drawing produced to show the look and function', icon: 'design'},
    {title: 'Development', text: 'Development is defined as the process of growth or new ', icon: 'development'},
    {title: 'Branding', text: 'The marketing practice of creating a name, symbol or ', icon: 'branding'},
    {title: 'Illustration', text: 'An illustration is a decoration, interpretation or visual', icon: 'illustration'},
]

const Services = () => {
    return (
        <section className={'services'}>
            <div className={'container'}>
                <div className={'services__wrapper'}>
                    <div className={'services__subtitle'}>
                        <Typography variant={'title2'} textAlign={'center'}>Our Services</Typography>
                    </div>
                    <div className={'services__title'}>
                        <Typography variant={'title3'} textAlign={'center'}>Why People Choose Us</Typography>
                    </div>
                    <ServicesList list={servicesData}/>
                </div>
            </div>
        </section>
    )
}

export default Services