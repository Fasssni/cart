import cl from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { cartSvg } from "../../utilities/consts"
import { useStoreContext } from "../../context/StoreContext"


export const Navbar=()=>{
  const {getModal, cartQuantity}=useStoreContext()
   
    const list=[{ 
                  id:0,
                  name:"Home",
                  link:"/"
                },
                {
                  id:1,
                  name:"Store", 
                  link:"/store"

                },
                {
                 id:2,
                 name:"About",
                 link:"/about"
                }]

    return  <nav className={cl.main}>
              
              <ol className={cl.top}>
                {list.map((el)=> 
                                <li className={cl.list} key={el.id}>
                                    <Link to={el.link}> {el.name}</Link>
                                </li>
                                )}
              </ol>
              <button className={cl.button} onClick={()=>getModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="92" height="97" id="cart">
                    <path d={cartSvg}>
                    </path>
                </svg>
                {cartQuantity&&<span className={cl.circle}>
                                  {cartQuantity}
                               </span>}
             </button>
             </nav>
          
           
}