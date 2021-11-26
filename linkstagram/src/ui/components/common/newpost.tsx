import React from "react";
import Style from "../../style/newpost.module.scss"
import ChoosePht from '../../../public/images/Choose.png'
import { type } from "os";

const NewPost = () => 
{return( 

    <form className={Style.NewPost}>
        <label className={Style.NewPost__choosePht}>
            <input className={Style.NewPost__chooseFileInp} type="file" />
            <img src={ChoosePht} alt="Choose your photo" />
            <div><p className={Style.NewPost__underPhtBoxText}>Choose any photo from your library</p></div>
        </label>
        <div><p className={Style.NewPost__supInput}>Description</p></div>
        <form>
        <textarea>Description</textarea>
        </form>
        <div className={Style.NewPost__formButtons}>
            <button className={Style.NewPost__commonBtnStyle + ' ' + Style.NewPost__cancelBtn}>Cancel</button>
            <button className={Style.NewPost__commonBtnStyle + ' ' + Style.NewPost__forPostBtn }>Post</button>
        </div>
    </form>

)}

export default NewPost;