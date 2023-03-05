import { background, Flex, position } from "@chakra-ui/react";
import React from "react";
import { NavItemComp } from "./NavItemComp/NavItemComp";

import { NavItems } from "./NavItems";

export const Navbar = () => {
  const style = {
    bg: "blackAlpha.700",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "full",
    position: "fixed",
  };

  return (
    <>
      <Flex sx={style}>
        {NavItems.map((item, index) => (
          <NavItemComp key={index} text={item} index={index} />
        ))}
      </Flex>
    </>
  );
};
