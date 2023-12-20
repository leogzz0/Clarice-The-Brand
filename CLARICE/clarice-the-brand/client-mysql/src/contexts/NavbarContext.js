import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const NavbarContext = createContext();

export const useNavbarVisibility = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <NavbarContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};

NavbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
