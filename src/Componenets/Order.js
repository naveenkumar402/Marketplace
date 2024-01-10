
import React from 'react';
import { useOrder } from './OrderContext';
import { useCart } from './CartContext';
import Payment from './Payment';

const Order = () => {
  const { orders, dispatch: orderDispatch } = useOrder();
  const { cart, dispatch: cartDispatch } = useCart();

  const placeOrder = () => {
    const newOrder = { items: cart, total: cart.reduce((total, item) => total + item.price, 0) };
    orderDispatch({ type: 'PLACE_ORDER', payload: newOrder });
    cartDispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Place Order</h2>
      {cart.length > 0 && (
        <div>
          <Payment onSuccess={placeOrder} />
        </div>
      )}
    </div>
  );
};

export default Order;
