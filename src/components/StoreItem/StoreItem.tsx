import { useEffect } from "react"
import { useStoreContext } from "../../context/StoreContext"
import cl from "./StoreItem.module.css"

export type StoreItemProps={ 
    id:number
    name: string
    url: string
    price:number
}
export const StoreItem=({id,name,url,price}:StoreItemProps)=>{ 
    const {getCount, increaseCount, decreaseCount}=useStoreContext()
    
    const quantity:number=getCount(id)

    return <div className={cl.main} key={id}>
               <img className={cl.image} src={url}/> 
               <h2>{name}</h2>
               <h3>${price}</h3>
               
               {quantity===0
                ?
                <button className={cl.item__button} 
                        onClick={()=>increaseCount(id)}>
                            Add to Cart
                </button>
                :
                <div className={cl.adder}>
                     <button className={cl.plus}
                             onClick={()=>increaseCount(id)}
                      >
                                +
                      </button>
                      <p className={cl.count}>{quantity}</p>
                     <button className={cl.plus}
                             onClick={()=>decreaseCount(id)}
                     >
                                -
                     </button> 
                </div>

               }
          </div>
}