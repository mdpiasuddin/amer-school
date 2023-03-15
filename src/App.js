import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import MenuBaner from "./components/MenuBaner";
import ShowQuize from "./components/ShowQuize/ShowQuize";
import StartQuize from "./components/StartQuize/StartQuize";
import ErrorPage from "./components/errorpage/ErrorPage";
import Static from "./components/Static/Static";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <MenuBaner></MenuBaner>,
        },
        {
          path: "/home",
          element: <MenuBaner></MenuBaner>,
        },
        {
          path: "/topic",
          element: <ShowQuize></ShowQuize>,
        },
        {
          path: "/quize/:qid",
          loader: async (params) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.params.qid}`
            );
          },
          element: <StartQuize></StartQuize>,
        },
        {
          path: "/static",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Static></Static>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
