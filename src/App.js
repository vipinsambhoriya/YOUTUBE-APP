import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer";
import Head from "./Components/Head";
import WatchPage from "./Components/WatchPage";
import store from "./utils/store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Demo from "./Components/Demo";
import Demo1 from "./Components/Demo1";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/Demo",
        element: (
          <>
            {" "}
            <Demo />,<Demo1 />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
