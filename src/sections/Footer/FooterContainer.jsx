import React from "react";
import './footer.scss'
import FooterMenu from "./FooterMenu";
import FooterInfo from "./FooterInfo";
import Typography from "../../components/Typography";
import Icon from "../../components/Icon";

const footerMenu1 = {
    id: '1',
    title: 'Resouces',
    list: [
        {
            text: 'Revisions',
            link: '#',
        },
        {
            text: 'Sheets',
            link: '#',
        },
        {
            text: 'Quiz',
            link: '#',
        },
        {
            text: 'Drill',
            link: '#',
        },
    ]
}

const footerMenu2 = {
    id: '2',
    title: 'About',
    list: [
        {
            text: 'About us',
            link: '#',
        },
        {
            text: 'Partners',
            link: '#',
        },
        {
            text: 'Contact us',
            link: '#',
        },
        {
            text: 'Careers',
            link: '#',
        },
    ]
}

const footerMenu3 = {
    id: '3',
    title: 'Helpful link',
    list: [
        {
            text: 'Mirage',
            link: '#',
        },
        {
            text: 'Solutions',
            link: '#',
        },
        {
            text: 'Industries',
            link: '#',
        },
        {
            text: 'Services',
            link: '#',
        },
    ]
}

const allMenu = [footerMenu1, footerMenu2, footerMenu3]

const FooterContainer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__top">
                    <FooterInfo/>
                    {allMenu.map(menu => <FooterMenu key={menu.id} menu={menu}/>)}
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-wrap">
                         <span className="footer__bottom-text">
                        <Typography variant={'text2'}>&#169; 2015 All Rights Reserved By Mirage 2020</Typography>
                    </span>
                        <div className="footer__select">
                            <Icon className={'footer__select-icon'} icon={'land'} width={'28px'} height={'28px'}/>
                            <select name="lang">
                                <option value="en">En</option>
                                <option value="ua">Ua</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterContainer