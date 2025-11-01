
import App from '@/App'
import Tasks from '@/pages/tasks';
import User from '@/pages/uses';
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children:[
        {
          path:'/users',
          element:<User></User>
        },

        {
          path:'/tasks',
          element:<Tasks/>
        }
    ]
  },
 
]);

export default router

