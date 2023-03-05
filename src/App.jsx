import { useState } from "react";
import "./App.css";
import { Button, Flex } from "@chakra-ui/react";
import { Root } from "./Components/Root";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
	<Root/>
    </>
  );
}

export default App;
