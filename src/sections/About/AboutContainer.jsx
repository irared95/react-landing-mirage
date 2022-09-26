import React from 'react';
import About from "./About";

const aboutData = [
    {
        subtitle: 'Design Things ',
        title: 'We Loves To Design Your Creative Ideas ',
        text: 'A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages',
        image: 'artist',
        buttonText: 'Learn more'
    },
    {
        subtitle: 'Our Teamwork ',
        title: 'We Believe Success Lies On Teamwork',
        text: 'Good teamwork means a synergistic way of working with each person committed and working towards a shared goal. ... It is therefore a necessity that leaders facilitate and build the teamwork skills of their people if they are',
        image: 'welcome',
        buttonText: 'Learn more',
        reverse: true
    },
    {
        subtitle: 'Testimonial ',
        title: 'Thats What Our Client Says About Us',
        text: '“Heartiest congratulations to the team for Future projects. I extend thankful wishes and wish the team best of luck for the future assignments to come. Your effort is gladly”',
        image: 'review',
    },
]

const AboutContainer = () => {
    return (
        aboutData.map(({subtitle, title, text, image, buttonText, reverse}, index) => {
            return (
                <About
                    key={index}
                    subtitle={subtitle}
                    title={title}
                    text={text}
                    image={image}
                    buttonText={buttonText}
                    reverse={reverse}
                />
            )
        })
    );
};

export default AboutContainer;