import { createSlice } from "@reduxjs/toolkit";
import data from '../component/JsonFiles/Product.json'
const cartitem = createSlice({
    name: "cartitem",
    initialState: {
        itemsid: [],
        allcartitems: [{
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
            ]
        }, {
            "id": 25,
            "title": "Gulab Powder 50 Gram",
            "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
            "price": 70,
            "discountPercentage": 13.58,
            "rating": 4.87,
            "stock": 47,
            "brand": "Dry Rose",
            "category": "groceries",
            "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/25/1.png",
                "https://cdn.dummyjson.com/product-images/25/2.jpg",
                "https://cdn.dummyjson.com/product-images/25/3.png",
                "https://cdn.dummyjson.com/product-images/25/4.jpg",
                "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
            ]
        },
        {
            "id": 26,
            "title": "Plant Hanger For Home",
            "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
            "price": 41,
            "discountPercentage": 17.86,
            "rating": 4.08,
            "stock": 131,
            "brand": "Boho Decor",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/26/1.jpg",
                "https://cdn.dummyjson.com/product-images/26/2.jpg",
                "https://cdn.dummyjson.com/product-images/26/3.jpg",
                "https://cdn.dummyjson.com/product-images/26/4.jpg",
                "https://cdn.dummyjson.com/product-images/26/5.jpg",
                "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
            ]
        },
        {
            "id": 27,
            "title": "Flying Wooden Bird",
            "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
            "price": 51,
            "discountPercentage": 15.58,
            "rating": 4.41,
            "stock": 17,
            "brand": "Flying Wooden",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
            "images": [
                "https://cdn.dummyjson.com/product-images/27/1.jpg",
                "https://cdn.dummyjson.com/product-images/27/2.jpg",
                "https://cdn.dummyjson.com/product-images/27/3.jpg",
                "https://cdn.dummyjson.com/product-images/27/4.jpg",
                "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
            ]
        },
        {
            "id": 28,
            "title": "3D Embellishment Art Lamp",
            "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
            "price": 20,
            "discountPercentage": 16.49,
            "rating": 4.82,
            "stock": 54,
            "brand": "LED Lights",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/28/1.jpg",
                "https://cdn.dummyjson.com/product-images/28/2.jpg",
                "https://cdn.dummyjson.com/product-images/28/3.png",
                "https://cdn.dummyjson.com/product-images/28/4.jpg",
                "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
            ]
        },
        {
            "id": 29,
            "title": "Handcraft Chinese style",
            "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
            "price": 60,
            "discountPercentage": 15.34,
            "rating": 4.44,
            "stock": 7,
            "brand": "luxury palace",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
            "images": [
                "https://cdn.dummyjson.com/product-images/29/1.jpg",
                "https://cdn.dummyjson.com/product-images/29/2.jpg",
                "https://cdn.dummyjson.com/product-images/29/3.webp",
                "https://cdn.dummyjson.com/product-images/29/4.webp",
                "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
            ]
        },
        {
            "id": 30,
            "title": "Key Holder",
            "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
            "price": 30,
            "discountPercentage": 2.92,
            "rating": 4.92,
            "stock": 54,
            "brand": "Golden",
            "category": "home-decoration",
            "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/30/1.jpg",
                "https://cdn.dummyjson.com/product-images/30/2.jpg",
                "https://cdn.dummyjson.com/product-images/30/3.jpg",
                "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
            ]
        }],
        itemprice: 0,
        totalprice: 0,
    },
    reducers: {
        addtocart(state, action) {
            state.itemsid.push(action.payload)

            const newitem = data.find((item) => {
                return item.id == action.payload
            })
            state.allcartitems.push(newitem);
            const suming = () => {
                const total = state.allcartitems.reduce((accumulator, currentValue)=> accumulator+(currentValue.price),0)
                state.itemprice = total;
                total >= 500 ? state.totalprice = total  : state.totalprice = total+ 40;
             }
             suming();
        },

        deletefromcart(state,action){
            state.allcartitems = state.allcartitems.filter((item)=>{
                return item.id != action.payload;
            })
            const suming = () => {
                const total = state.allcartitems.reduce((accumulator, currentValue)=> accumulator+(currentValue.price),0)
                state.itemprice = total;
                total >= 500 ? state.totalprice = total  : state.totalprice = total+ 40;
             }
             suming();
        }
    }
})

export default cartitem
export const { addtocart} = cartitem.actions;
export const { deletefromcart } = cartitem.actions;
