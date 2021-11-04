import Style from "../../style/footer.module.scss"

const Footer = () => 
{return( 
    <div className={Style.Footer}>
        <div><h5 className={Style.Footer__text}>{`About Help Privacy Terms Locations Language
    © 2020 Linkstagram`}</h5></div>
    </div>
 )}

export default Footer;