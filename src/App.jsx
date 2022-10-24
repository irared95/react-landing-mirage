import React from 'react';
import Services from "./sections/Services";
import AboutContainer from "./sections/About/AboutContainer";
import Partners from "./sections/Partners";
import Subscribe from "./sections/Subscribe";
import FooterContainer from "./sections/Footer/FooterContainer";

const App = () => {
    return (
        <>
            <Services/>
            <AboutContainer/>
            <Partners/>
            <Subscribe/>
            <FooterContainer/>
        </>
    );
};

export default App;