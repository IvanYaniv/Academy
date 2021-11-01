import React from "react";
import Style from "../../style/main.module.scss"
import Card from "./card"
import Stories from "./stories"
import Footer from "./footer"



const Main = () => 
{return( 
     <div className={Style.Main}>
         <div> 
            <Stories />
            <Card />
        </div>
        <div className={Style.Main__profileBar}>
            <div className={Style.Main__followStatus}>
                <div className={Style.Main__followNumsAndText}>
                    <div><p className={Style.Main__followNumber}>1,1 K</p></div>
                    <div><p className={Style.Main__followText}>Followers</p></div>
                </div>
                <div className={Style.Main__followAva}></div>
                <div className={Style.Main__followNumsAndText}>
                    <div><p className={Style.Main__followNumber}>448</p></div>
                    <div><p className={Style.Main__followText}>Following</p></div>
                </div>
            </div>
            <div className={Style.Main__profileTitle}>
                <div><p className={Style.Main__profileName + ' ' + Style.Main__followText}>Alexandr Sokolov</p></div>
                <div className={Style.Main__profileIcon}></div>
                <div><p className={Style.Main__profileJob + ' ' + Style.Main__followText}>Photographer</p></div>
            </div>
            <div><p className={Style.Main__profileSubtitle}>{`Like to travel and shoot cinematic and b/w photos
            Tools - Capture One for Raw`}</p></div>
            <div className={Style.Main__profileButtons}>
                <a href="#" className={Style.Main__profileBox + ' ' + Style.Main__editBtn + ' ' + Style.Main__editText}>Edit profile</a>
                <a href="#" className={Style.Main__profileBox + ' ' + Style.Main__newPostBtn + ' ' + Style.Main__newPostText}>New post</a>
            </div>
            <div>
                <Footer />
            </div>
        </div> 
    </div> 
 )}

export default Main;