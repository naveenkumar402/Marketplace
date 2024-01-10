import React, { createContext, useContext, useReducer } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, dispatch] = useReducer(orderReducer, []);

  return (
    <OrderContext.Provider value={{ orders, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'PLACE_ORDER':
      return [...state, action.payload];
    default:
      return state;
  }
};
