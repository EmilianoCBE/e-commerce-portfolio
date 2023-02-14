import { Box, Flex } from '@chakra-ui/react'

export const CenteredLabel = ({children}) =>{
    return (
      <Flex display="flex" alignItems="center" justifyContent="center" height="100%">
        <Box bgColor="white" padding="1rem 1.5rem" width="fit-content"position="relative" zIndex="1" textTransform="uppercase" fontWeight="bold" borderRadius="0.25rem">
          {children}
        </Box>
      </Flex>
    )
  }