export const cartAction =(item)=>{
    return{
        type:"ADD_ITEM",
        payload:item
    }
}

export const cartItems = (item) => {
    return{
        type:"CART_ITEMS",
        payload:item
    }
}