import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/maiinRouter"


const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter}/>
    </div>
  )
}

export default App
