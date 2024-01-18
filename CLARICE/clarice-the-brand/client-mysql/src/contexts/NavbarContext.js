import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const NavbarContext = createContext();

export const useNavbarVisibility = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const showNavbar = () => setIsVisible(true);
  const hideNavbar = () => setIsVisible(false);

  return (
    <NavbarContext.Provider value={{ isVisible, setIsVisible, showNavbar, hideNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

NavbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
