import Tractor from "../../assests/Tractor.jpg";
import Rice from "../../assests/Rice.jpg";
import tomato from "../../assests/tomato.jpg";
import pesticides from "../../assests/Pesticides.jpg";
import pesticides1 from "../../assests/Pesticides1.jpg";
import custard from "../../assests/custard.jpg";
import{ADD_TO_WISHLIST,REMOVE_ITEM,ADD_QUANTITY,SUBTRACT_QUANTITY} from "../constant/wishlistConstant"

const initialState={
    items:[
        
        {id:1,title:"Tractor",location:"Mumbai",price:150,img:Tractor},
        {id:2,title:"Basmati Rice",location:"Punjab",price:100,img:Rice},
        {id:3,title:"Tomato",location:"Patna",price:15,img:tomato},
        {id:4,title:"Pesticides",location:"Nashik",price:500,img:pesticides},
        {id:5,title:"Pesticides",location:"Bengluru",price:250,img:pesticides1},
        {id:6,title:"Rice",location:"Delhi",price:100,img:Rice},
        {id:7,title:"Tractor",location:"Karjat",price:150,img:Tractor},
        {id:8,title:"custard",location:"Nagpur",price:125,img:custard},
    ],
    addedItems:[],
    total:0
}

export const wishlistReducer=(state=initialState,action)=>{
    if(action.type === ADD_TO_WISHLIST){
        let addedItem = state.items.find(item=> item.id === action.id)
      
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total:addedItem + addedItem.price 
         }
      }
       else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total: newTotal
          }
          
      }
  }

  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}
if(action.type=== ADD_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUBTRACT_QUANTITY){  
    let addedItem = state.items.find(item=> item.id === action.id) 
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    
}
  else{
      return state
  }
}



