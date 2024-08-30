import { Route, Routes } from "react-router-dom"
import Todo from "./Todo/Todo"


const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Todo/>}/>
      

     </Routes>

    </>
  )
}

export default App
