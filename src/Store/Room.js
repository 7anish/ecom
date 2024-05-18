import { createSlice } from "@reduxjs/toolkit";
import data from '../component/JsonFiles/Product.json'
const cartitem = createSlice({
    name: "cartitem",
    initialState: {
        itemsid: [],
        allcartitems: [],
        itemprice: 0,
        totalprice: 0,
        totalquatity : 0,
    },
    reducers: {
        // 1st reducer
        addtocart(state, action) {
            const ispresent = state.itemsid.find((id)=>   id == action.payload ) ? 1 : 0;
            if (ispresent) {
                state.allcartitems.map((item)=>{
                    if(item.id == action.payload){
                        item.quantity ++ ; 
                    }
                })
            }

            else {
                state.itemsid.push(action.payload)
                const newitem = data.find((item) => {
                    return item.id == action.payload
                })
                state.allcartitems.push(newitem);
            }

            const suming = () => {
                const total = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.price*currentValue.quantity), 0)
                state.itemprice = total;
                total >= 500 ? state.totalprice = total : state.totalprice = total + 40;

                state.totalquatity = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity) , 0)
            }
            suming();
        },

        // 2nd reducer

        deletefromcart(state, action) {
            state.allcartitems = state.allcartitems.filter((item) => {
                return item.id != action.payload;
            })
            const suming = () => {
                const total = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.price), 0)
                state.itemprice = total;
                total >= 500 ? state.totalprice = total : state.totalprice = total + 40;

                state.totalquatity = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity) , 0)
            }
            suming();
        },

        // 3rd reducer

        incquantity(state,action){
            state.allcartitems.map((item)=>{
                if(item.id == action.payload){
                    item.quantity ++ ; 
                }
            })

            const suming = () => {
                const total = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.price*currentValue.quantity), 0)
                state.itemprice = total;
                total >= 500 ? state.totalprice = total : state.totalprice = total + 40;

                state.totalquatity = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity) , 0)
            }
            suming();
        },

        // 4th reducer
        decquantity(state , action){
            state.allcartitems.map((item)=>{
                if(item.id == action.payload){
                    item.quantity -- ; 
                }
            })

            const suming = () => {
                const total = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.price*currentValue.quantity), 0)
                state.itemprice = total;
                total >= 500 ? state.totalprice = total : state.totalprice = total + 40;

                state.totalquatity = state.allcartitems.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity) , 0)
            }
            suming();
        }
    }
})

export default cartitem
export const { addtocart } = cartitem.actions;
export const { deletefromcart } = cartitem.actions;
export const { incquantity} = cartitem.actions;
export const {decquantity}=cartitem.actions;
