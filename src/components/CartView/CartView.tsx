import { CartItem, useStoreContext } from "../../context/StoreContext"
import cl from "./Cart.module.css"
import ItemList from "../../data/items.json"
import { StoreItemProps } from "../StoreItem/StoreItem";

type CartViewProps={
    id:number
    name: string
    url: string
    price:number
    count:number
}

export const CartView=({count, name, id, url, price}:CartViewProps)=>{  
    
   
    const {increaseCount, decreaseCount, removeItem}=useStoreContext()
    

    return <>  
             
                 <div className={cl.itemview_main}>
                          <div className={cl.left}>
                            <img className={cl.image} src={url}/> 
                             <h2>{name}</h2>
                          </div>
                            <h3>${price*count}</h3>
                          <div className={cl.adder}>
                                <button className={cl.plus}
                                        onClick={()=>increaseCount(id)}
                                >
                                            +
                                </button>
                                <p className={cl.count}>{count}</p>
                                <button className={cl.plus}
                                        onClick={()=>decreaseCount(id)}
                                >
                                            -
                                </button> 
                                < button className={cl.remove}
                                         onClick={()=>removeItem(id)}>
                                            X
                                </button>
                            </div>
                       </div>
             
           </>

}