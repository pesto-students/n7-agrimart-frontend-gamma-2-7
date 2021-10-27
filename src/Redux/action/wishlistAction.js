import {ADD_TO_WISHLIST} from "../constant/wishlistConstant";
import {REMOVE_ITEM} from "../constant/wishlistConstant";
import {ADD_QUANTITY} from "../constant/wishlistConstant";
import {SUBTRACT_QUANTITY} from "../constant/wishlistConstant";
import {PRICE_UPDATE} from "../constant/wishlistConstant";

export const addToWishlist= (id)=>{
    return{
        type: ADD_TO_WISHLIST,
        id }
    }
export const removeItem= (id)=>{
        return{
            type: REMOVE_ITEM,
             id }
    }
export const addQuantity= (id)=>{
        return{
            type: ADD_QUANTITY,
             id }
}  
export const subtractQuantity= (id)=>{
    return{
        type: SUBTRACT_QUANTITY,
         id }
}  

export const priceUpdate= (id)=>{
    return{
        type: PRICE_UPDATE,
         id }
} 