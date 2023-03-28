import { StarIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/react"

export function Rating({rate}){
    const count = Math.round(rate)
  
    return (
        <Flex gap="0.15rem">
            {
                Array(Math.round(5)).fill(null).map(
                (_,i)=> {
                    const color = i < count ? "orange" : "gray.300"
                    return <StarIcon key={i} color={color}/>
                    }
                )
            }
        </Flex>
    )
  }