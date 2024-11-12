import { configureStore } from "@reduxjs/toolkit"
import createReducer from "./CartSlice"

const rootReducer = {
    cart: createReducer
}


const store = configureStore({
    reducer: rootReducer
}
)



export default store