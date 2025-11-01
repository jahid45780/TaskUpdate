import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { RouterProvider } from 'react-router'
import router from './routers/index.tsx'
import { ThemeProvider } from './providers/ThemeProvder.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark'  storageKey="vite-ui-theme" >
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>
 </ThemeProvider>
  </StrictMode>,
)
