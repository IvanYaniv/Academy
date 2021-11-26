import React from "react";
import Style from "../../style/header.module.scss"

const Header = () => 
{return( 
<div className={Style.Header}>
    <div className={Style.Header__logo}><p>Inforce SHOP</p></div>
    <div className={Style.Header__nav}>
        <a href="/" className={Style.Header__item + ' ' + Style.LinkBox + ' ' + Style.Header__homeTypo + ' ' + Style.Header__homeBox}>Home</a>
        <div className={Style.Header__item + ' ' + Style.LinkBox + ' ' + Style.Header__langBox}><p className={Style.LangEn}>en</p></div>
        <button className={Style.Header__item  + ' ' + Style.LinkBox  + ' ' + Style.Header__navImg  + ' ' + Style.Header__navShopIcon}></button>
    </div>
    <div className={Style.Header__navMobile}>
        <div className={Style.LinkBox  + ' ' + Style.Header__navImg}></div>
    </div>
</div>
 )}

export default Header;