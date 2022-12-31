import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { createTheme } from '@nextui-org/react'
import {SessionProvider} from 'next-auth/react'

const darkTheme = createTheme(
  {
    type: 'dark',
    theme: {
      colors: {}
    }
  }
)
export default function App({ Component, pageProps , session}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps}/>
      </NextUIProvider>
    </SessionProvider>
  )
}
