import React from "react";
import PartnersList from "./PartnersList";


const partnersData = [
    {image: 'partner1'},
    {image: 'partner2'},
    {image: 'partner3'},
    {image: 'partner4'},
    {image: 'partner5'},
]

const Partners = () =>{
    return(
        <section className={'partners'}>
            <div className={'container'}>
                <PartnersList list={partnersData}/>
            </div>
        </section>
    )
}

export default Partners