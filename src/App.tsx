
import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import Studies from "./components/Studies/Studies";
import Contact from "./components/Contact/Contact";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/portfolio/',
      element: <HomePage />
    },
    {
      path: '/portfolio/studies/',
      element: <Studies />
    },
    {
      path: '/portfolio/contact',
      element: <Contact/>
    }
  ]);

  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
