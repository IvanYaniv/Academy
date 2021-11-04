import React,{useState} from "react";
import Style from "../../style/stories.module.scss"


const Stories = () => 
{
    const [show,setShow]=useState(true)
    return( 
    <div className={Style.Stories}>

        <div className={Style.Stories__opacity}></div>
        <ul className={Style.Stories__storiesIconBox}>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconOne + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconTwo + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconThree + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconFour + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconFive + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconSix + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconSeven + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconEight + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconTwo + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconTwo + ' ' + Style.Stories__storiesIconWidth}></div></li>
            <li className={Style.Stories__storiesIcon}><div className={Style.Stories__storiesIconTwo + ' ' + Style.Stories__storiesIconWidth}></div></li>
        </ul>    
            {
            show?<div className={Style.Stories__newPostAvail}>
                    <div className={Style.Stories__newPostAvailBox}>
                        <a href="/" className={Style.Stories__newPostAvailText}>New posts available</a>
                        <a onClick={()=>setShow(false)} className={Style.Stories__newPostAvailIcon}></a>
                    </div>
                </div>:null
            }    
    </div>
 )}

export default Stories;