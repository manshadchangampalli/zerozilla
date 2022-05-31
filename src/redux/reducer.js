var cart = []

export const cartReducer = (state=cart,action) => {
    switch(action.type){
        case "ADD_ITEM":
            return state = [...state,action.payload]
        default:
            return state
    }
}

export const cartItems = (state=[],action) => {
    switch(action.type){
        case "CART_ITEMS":
            return state =[...state , action.payload]
        default:
            return state
    }
}