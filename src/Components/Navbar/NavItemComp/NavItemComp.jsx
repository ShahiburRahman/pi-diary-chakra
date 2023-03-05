import { Text } from '@chakra-ui/react'
import React from 'react'

export const NavItemComp = ({text, index}) => {
        const style = {
                color: "white",
                padding: "1rem",
                boarder: "2px",
                cursor: "pointer",
                borderRadius: "8px",
                ":hover ": {
                        bg: "red.500"
                }
        }
  return (
    <Text sx={style}>{text}, {index}</Text>
  )
}
