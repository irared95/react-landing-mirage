import React from "react";
import Logo from "../../components/Logo";
import Socials from "../../components/Socials/Socials";
import Typography from "../../components/Typography";

const FooterInfo = () => {
    return (
        <div className={'footer-info'}>
            <div className="footer-info__logo">
                <Logo/>
            </div>
            <address className={'footer-info__address'}>
                <p>
                    <Typography variant={'text1'}>560 N Riverview D Ste 658</Typography>
                </p>
                <p>
                    <Typography variant={'text1'}>North Carolina DA 598745 USA</Typography>
                </p>
            </address>
            <h5 className={'footer-info__title'}>
                <Typography variant={'title6'}>Follow us on</Typography>
            </h5>
            <ul className={'footer-info__list'}>
                <li className={'footer-info__item'}>
                    <Socials link={'#'} icon={'instagram'} width={'30px'} height={'30px'}/>
                </li>
                <li className={'footer-info__item'}>
                    <Socials link={'#'} icon={'twitter'} width={'30px'} height={'30px'}/>
                </li>
                <li className={'footer-info__item'}>
                    <Socials link={'#'} icon={'youtube'} width={'30px'} height={'30px'}/>
                </li>
                <li className={'footer-info__item'}>
                    <Socials link={'#'} icon={'facebook'} width={'30px'} height={'30px'}/>
                </li>
            </ul>
        </div>
    )
}

export default FooterInfo