import { useState, createContext, useContext, ReactNode, useEffect } from "react";

type ContextValueProps = {
  getCount: (id: number) => number; 
  cartQuantity:number;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems:CartItem[]; 
  isModal:boolean;
  getModal: ()=> void;
};

type ChildrenType = {
  children: React.ReactNode;
};

export type CartItem = {
  id: number;
  count: number;
};

const StoreContext = createContext({} as ContextValueProps);

export const useStoreContext = () => {
  return useContext(StoreContext);
};

export function ShoppingCartProvider({ children }: ChildrenType) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isModal, setIsModal]=useState<boolean>(false)

  const getCount = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.count : 0;
  };

  const increaseCount = (id: number) => {
    setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (foundItem !== undefined) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      } else {
        return [...currItems, { id, count: 1 }];
      }
    });
  };

  const decreaseCount = (id: number) => { 
      setCartItems(currItems=>{
                            const foundItem=currItems.find(item=>item.id===id)
                            if(foundItem?.count===1){
                                return currItems.filter(item=>item.id!==id)
                            }else{ 
                              return currItems.map((item)=>{
                                if(item.id===id){ 
                                  return {...item,count:item.count-1}
                                }else{ 
                                  return item
                                }
                              })
                            }
                            
                             
                            })
    
  };

  const removeItem = (id: number) => { 

    setCartItems(currItems=>currItems.filter(item=>item.id!==id))
    
  };

  const getModal=()=>{ 

    setIsModal(!isModal)
  }
  
  
  const cartQuantity=cartItems.reduce((quantity, item)=>quantity+item.count, 0)
   
  useEffect(()=>{ 
      console.log(cartItems)
  },[cartItems])

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        cartQuantity,

        getCount,
        increaseCount,
        decreaseCount,
        removeItem,
         
        isModal,
        getModal
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}