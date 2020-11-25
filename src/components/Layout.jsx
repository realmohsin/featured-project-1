import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import HtmlHead from './HtmlHead'
import Navigation from '../components/Navigation'
import Footer from './Footer'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <HtmlHead title={title} description={description} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
