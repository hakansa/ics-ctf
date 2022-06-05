import React, { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = (props) => {
  const [solved, setSolved] = useState(false);
  return (
    <ButtonContext.Provider value={{ solved, setSolved }}>
      {props.children}
    </ButtonContext.Provider>
  );
};
