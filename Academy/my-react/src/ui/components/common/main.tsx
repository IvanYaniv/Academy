import React from "react";
import Style from "../../style/main.module.scss"
import { stockData } from "../../../api/products"

function saveToLocalStore (data:any) {
    localStorage.setItem('goods', data);
};
 
class Main extends React.Component {
    constructor(props:any) {
      super(props);
      this.state = {};
  
    }
  
    render() {
      return (
        <div className={Style.Main}>
        <div className={Style.Main__ProductsList}>


        {stockData.map((data, key) => {
                return (
                    
                    <a href="#" onClick={()=>saveToLocalStore(JSON.stringify(data))} className={Style.Main__ProductsItem}>
                            
                            <div><img className={Style.Main__ProductsImg} src={data.image} alt={data.name} /></div>

                            <div className={Style.Main__UnderPhotoTextBox}>
                                <h2 className={Style.Main__UnderPhotoText}> 
                                {data.name}
                                </h2>
                            </div>

                            <div className={Style.Main__PriceAndBuy}>
                                <div><p className={Style.Main__Price}>{data.price}</p></div>
                                <button className={Style.Main__BuyIcon}></button>
                            </div>
                            
                    </a>

                );
            })}

        </div>
    </div>
      );
    }
  }


export default Main;