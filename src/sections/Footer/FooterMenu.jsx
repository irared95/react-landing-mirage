import React from "react";
import Typography from "../../components/Typography";

const FooterMenu = ({menu}) =>{
    return(
        <div className={'footer-menu'}>
            <div className="footer-menu__head">
                <Typography variant={'title5'}>{menu.title}</Typography>
            </div>
            <ul className={'footer-menu__list'}>
                {menu.list.map(item => <li className={'footer-menu__item'} key={item.text}><a href={item.link}><Typography variant={'text1'}>{item.text}</Typography></a></li>)}
            </ul>
        </div>

    )
}

export default FooterMenu