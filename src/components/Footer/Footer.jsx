import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return(
        <footer className={s.footer}>
            <div className={s.footer__item}>Контакты</div>
            <div className={s.footer__item}>Rospodyem@mail.ru</div>
            <div className={s.footer__item}>Телефон: +7 (938) 133 4994</div>
            <div className={s.footer__item}>WhatsApp: +7 (938) 133 4994</div>
        </footer>
    )
}

export default Footer;