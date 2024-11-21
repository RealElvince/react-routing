import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import Profiles from './pages/Profiles.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';


// list of routes
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>,
     errorElement:<NotFoundPage/>
  },
  {
    path:"/profiles",
    element:<Profiles/>,
    children:[
      {
    path:"/profiles/:profileId",
    element:<ProfilePage/>
        }
    ]
  }
  
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
