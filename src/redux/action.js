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
export const navItems = (item) => {
    return{
        type:"NAV_ITEMS",
        payload:item
    }
}
export const searchItem = (item) => {
    return{
        type:"SEARCH_ITEM",
        payload:item
    }
}