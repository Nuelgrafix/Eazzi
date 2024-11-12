import { createSlice } from "@reduxjs/toolkit";

// Helper function to store data in localStorage
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
    totalAmounts: 0,
    totalItems: 0,
    deliveryCharge: 10,
  },
  reducers: {

    // Add to Cart
    addToCart(state, action) {
  
      const existingItem = state.data.find((item) => item.id === action.payload.id);

      if (existingItem) {
        const tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity; 
            let newTotalPrice = newQty * item.unit_price;

            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.data = tempCart;
      } else {
 state.data.push({     ...action.payload,
          totalPrice: action.payload.unit_price * action.payload.quantity,
        });
      }
      console.log("Updated cart data:", state.data); 
      storeInLocalStorage(state.data);
    },

    // updateItem
    updateQuantity(state,action) {
        const {id, quantity}  = action.payload;
        const itemToUpdate = state.data.find((item) => item.id == id);
        if(itemToUpdate){
            const validQuantity = Math.max(quantity, 1 );
            itemToUpdate.quantity = validQuantity
            itemToUpdate.totalPrice = itemToUpdate.unit_price * validQuantity;
        }
    },

    //removeQuantity
    removeQuantity(state,action){
        const tempCart = state.data.filter(
            (item) => item.id != action.payload.id)
            state.data = tempCart
            storeInLocalStorage(state.data)

    },


    //get Cart Total

 getCartTotal(state){
  state.totalAmounts =  state.data.reduce((getCartTotal, cartItems) => {
    return (getCartTotal += cartItems.totalPrice);

  },0 )
  state.totalItems = state.data.length

 }


  },
});



export const { addToCart, updateQuantity,removeQuantity,getCartTotal} = cartSlice.actions;
export default cartSlice.reducer