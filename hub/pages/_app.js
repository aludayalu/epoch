import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { createTheme } from '@nextui-org/react'

const darkTheme = createTheme(
  {
    type: 'dark',
    theme: {
      colors: {}
    }
  }
)
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps}/>
    </NextUIProvider>
  )
}
