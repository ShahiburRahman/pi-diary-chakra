import { Flex } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./Navbar/Navbar";

export const Root = () => {
	
  	return (
		<>
			<Navbar/>
			<Flex alignItems={"center"} justifyContent={"center"} height="900px">
				Hello
			</Flex>
		</>
	);
};
