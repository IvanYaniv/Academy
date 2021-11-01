import React from "react";
import Style from "../../style/card.module.scss"
import PublicationImg from '../../../public/images/mainpublication.png'
import PublicationImgMob from '../../../public/images/Publicationmob.png'

const Card = () => 
{return( 
    <div className={Style.Card}>

        <div className={Style.Card__top}>
            <div className={Style.Card__ava}>
                <div className={Style.Card__avatar + ' ' + Style.LinkBox}></div>
                <div className={Style.Card__userInfo}>
                    <h4 className={Style.Card__userNameText}>Nettie Fernandez</h4>
                    <p className={Style.Card__timeUnderUserName}>Just now</p>
                </div>
            </div>
            <div className={Style.Card__menuIcon}></div>
        </div>

        <div className={Style.Card__publicationImg}><img src={PublicationImg} alt="publication" /></div>
        <div className={Style.Card__publicationImgMob}><img src={PublicationImgMob} alt="publication" /></div>

        <div className={Style.Card__underPublication}>
            <div><p className={Style.Card__underPublicationText}>{`TB to New York October 2018.
            "You shouldn't wait for other people to make special things happen. 
            You have to create your own memories." Heidi Klum`}</p></div>
            <div className={Style.Card__lower}>
                <div className={Style.Card__lowerInteractions}>
                    <div className={Style.Card__likes}>
                        <div className={Style.Card__likesIcon}></div>
                        <div><p className={Style.Card__lowerNumber}>439</p></div>
                    </div>
                    <div className={Style.Card__comments}>
                    <div className={Style.Card__commentsIcon}></div>
                        <div><p className={Style.Card__lowerNumber}>34</p></div>
                    </div>
                </div>

                <div className={Style.Card__lowerShare}>
                    <div className={Style.Card__ShareLogo}></div>
                    <div className={Style.Card__ShareArrow}></div>
                </div>
            </div>
        </div>

    </div>
 )}

export default Card;