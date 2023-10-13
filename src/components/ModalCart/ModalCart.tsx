import {useMemo} from "react"

import { CartItem, useStoreContext } from "../../context/StoreContext"
import { CartView } from "../CartView/CartView"
import cl from "./ModalCart.module.css"
import ItemList from "../../data/items.json"
import { StoreItemProps } from "../StoreItem/StoreItem"

export const ModalCart=()=>{

    
    const {isModal, getModal, cartItems }=useStoreContext()

    const selectedItems=useMemo(()=>{ 
       return cartItems.map((item)=>{
             const foundItem= ItemList.find(x=>x.id===item.id)
             return {...foundItem!,count:item.count}
        })
    },[cartItems])
    
    const total=selectedItems.reduce((acc,item)=>acc+item.count*item.price,0)
  

    console.log("selected:", {selectedItems})
    return < > 
             {isModal&&<div className={cl.main}
                            onClick={()=>getModal()}
                            >
    
                          <div className={cl.cart} 
                               onClick={(e)=>e.stopPropagation()}>
                                {selectedItems.map((item)=>
                                    <CartView {...item}/>
                                    )
                                    }
                                {cartItems.length>0?<p> Total:{total}</p>:<p>There's nothing in your cart yet</p>}
                          </div>
                       </div>}
           </>
}