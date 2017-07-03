import React from 'react'
import { Provider as MobxProvider } from 'mobx-react'
import { ThemeProvider } from 'styled-components/native'
import stores from './stores'
import Librarian from './components/Librarian'

const theme = {
  primary:    '#9E9E9E',
  accent:     '#FF9800',
  background: '#FFFFFF',
  text:       '#263238'
}


const App = props => (
  <MobxProvider {...stores}>
    <ThemeProvider theme={theme}>
      <Librarian {...props} />
    </ThemeProvider>
  </MobxProvider>
)
export default App