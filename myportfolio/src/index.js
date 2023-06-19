import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import { ThemeProvider } from './context';

export const Index = () => {
  return (
      <ThemeProvider>
        <App/>
      </ThemeProvider>
  )
}

ReactDOM.render(<Index></Index>, document.getElementById("root"));