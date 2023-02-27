import { Box } from '@chakra-ui/react'

export const CenteredLabel = ({children}) =>{
    return (
        <Box bgColor="white" padding="1rem 1.5rem" width="fit-content"position="relative" zIndex="1" textTransform="uppercase" fontWeight="bold" borderRadius="0.25rem" textAlign='center'>
          {children}
        </Box>
    )
  }