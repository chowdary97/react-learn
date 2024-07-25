import React from "react";
import { useSelector } from "react-redux";
import { Item } from "../../components";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="w-5/12 bg-gray-100  mx-auto ">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      {cart && cart.length != 0 && <button
        onClick={() => {
          dispatch(clearCart());
        }}
        className="border-1 bg-blue-500 rounded-lg px-3 py-2 text-white text-right text-sm"
      >
        Clear Cart
      </button>}
      {cart && cart.length === 0 && <p className="text-center" >Cart is empty.</p>}
      {cart &&
        cart.length > 0 &&
        cart.map((item, index) => <Item item={item} key={index} />)}
    </div>
  );
};

export default Cart;
