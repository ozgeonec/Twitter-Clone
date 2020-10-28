import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../styles/app.css'
import StoreContext from '../store/store'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)
  useLayoutEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    themeSet(theme)
  }, [])
  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }
  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector('html')
    $html.setAttribute('class', theme.toString())
  }, [theme])
  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
