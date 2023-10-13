import { StoreItem } from "../components/StoreItem/StoreItem"
import Items from "../data/items.json"

export const Store=()=>{

    const test:Array<number>=[1,2,3]

    return <div className="store">
                {Items.map((item)=>
                  <StoreItem {...item}/>
              )}
          </div>
}