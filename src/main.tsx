import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import pages from './app/routerPages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReduxProvider from './resource/reduxStore'

const router = createBrowserRouter(pages)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <RouterProvider router={router}/>
    </ReduxProvider>
  </StrictMode>,
)
