import Container from "@material-ui/core/Container";
import {createContext,useState} from "react";

const CartContext= createContext();
/*function useCart(){
    const addProduct=(product, quantity)=>{
        <Container style={{display:"flex"}}>

        </Container>
    }
}*/
export default function CartProvider({children}){
    //const {addProduct}= useCart();
     const [cart,setCart]=useState([]); 
    const addProduct=(product, quantity)=>{
        setCart([...cart, product, quantity])
    }
return(
    <CartContext.Provider value={{addProduct,cart}}>
        {children}
    </CartContext.Provider>
)
}