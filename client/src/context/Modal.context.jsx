import React, { createContext, useState } from 'react';

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({});
  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};