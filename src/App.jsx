import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Dashboard from "./Components/Dashbord";
import Weather from "./Components/Weather";
import TodoList from "./Components/TodoList";
import Login from "./Components/Login";
import Profile from "./Components/Profile";


const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    
    { path: "/Dashboard", element: <Dashboard /> },
    { path: "/Weather", element: <Weather /> },
    { path: "/Todo", element: <TodoList /> },
    { path: '/Profile', element:<Profile/> }
  ],
},
{ path: "/Login", element: <Login /> },
])


function App() {
  

  return <>
    <RouterProvider router={router} />
  </>


}



export default App;