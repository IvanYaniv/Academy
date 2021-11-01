import React from "react";
import Style from "../../style/stories.module.scss"

const Stories = () => 
{return( 
    <div className={Style.Stories}>


        <div className={Style.Stories__storiesIconBox}>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconOne}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconTwo}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconThree}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconFour}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconFive}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconSix}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconSeven}></div>
            <div className={Style.Stories__storiesIcon + ' ' + Style.Stories__storiesIconEight}></div>
        </div>    
        <div className={Style.Stories__newPostAvail}>
            <div className={Style.Stories__newPostAvailBox}>
                <div><p className={Style.Stories__newPostAvailText}>New posts available</p></div>
                <div className={Style.Stories__newPostAvailIcon}></div>
            </div>
        </div>
    </div>
 )}

export default Stories;