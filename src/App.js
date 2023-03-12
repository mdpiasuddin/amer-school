import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import MenuBaner from "./components/MenuBaner";
import ShowQuize from "./components/ShowQuize/ShowQuize";
import StartQuize from "./components/StartQuize/StartQuize";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
