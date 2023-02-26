import { useState } from 'react'
import './App.css'
import { Button, Flex } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex justifyContent={'space-evenly'}>
        <div>
          Hello world
        </div>
        <p>
          hi 
        </p>
        <Button
          bg={"blackAlpha.300"}
        >
          click
        </Button>
      </Flex>
    </>
  )
}

export default App
