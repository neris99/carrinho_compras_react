import React, {useState} from 'react';
import { AppContext } from './AppContext';
import propTypes from 'prop-types';

export const Provider = ({children}) => {

  const [products,setProducts] = useState([]);
  const [cartItems ,setCartItems] = useState([]);
  const[loading, setLoading] = useState(true);
  const[isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible, 
    setIsCartVisible
  };
  
  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
