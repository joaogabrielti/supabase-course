import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import NavBar from './NavBar'
import AllPosts from './AllPosts'
import MessageBoard from './MessageBoard'
import PostView from './PostView'
import Welcome from './Welcome'

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <MessageBoard />,
          children: [
            {
              path: ":pageNumber",
              element: <AllPosts />,
            },
            {
              path: "post/:postId",
              element: <PostView />,
            },
          ],
        },
        {
          path: "welcome",
          element: <Welcome />,
          // loader: welcomeLoader,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
