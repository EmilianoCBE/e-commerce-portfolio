import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'

const theme = extendTheme({
  fonts: {
    heading: `'Spartna', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>  
  )
}
