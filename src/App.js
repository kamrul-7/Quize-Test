import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Justify from './components/Justify/Justify';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.postId}`)
          },
          element: <Home></Home>
        },
        {
          path: '/justify', element: <Justify></Justify>
        },
        {
          path: '/statistics', element: <Statistics></Statistics>
        },
        {
          path: '/blogs', element: <Blogs></Blogs>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
