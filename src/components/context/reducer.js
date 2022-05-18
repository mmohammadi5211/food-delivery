export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_SCROLLVALUE_LEFT: "SET_CARTITEMS_LEFT",
  SET_SCROLLVALUE_RIGHT: "SET_CARTITEMS_RIGHT",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case actionType.SET_SCROLLVALUE_LEFT:
      return {
        scrollValueLeft: action.scrollValueLeft,
      };
    case actionType.SET_SCROLLVALUE_RIGHT:
      return {
        scrollValueRight: action.scrollValueRight,
      };

    default:
      return state;
  }
};

export default reducer;
