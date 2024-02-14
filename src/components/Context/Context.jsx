import { createContext } from "react";

export const hamburgMenu = {
  closed: {
    display: "none",
  },
  open: {
    display: "block",
  },
};

const MenuContext = createContext(hamburgMenu.closed);

export default MenuContext;
