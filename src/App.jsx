import{Link,RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css'
import StudentList from "./pages/StudentList";
import AjaxToReact from "./pages/AjaxtoReact";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
   
const router = createBrowserRouter([
  { 
    path: "/",
  element: <StudentList/>
},
{
  path:"/student-add",
element:<AddStudent/>
},
{
  path:"/ajax-react",
  element:<AjaxToReact/>
},
{
  path:"/student-edit/:id",
  element:<EditStudent/>
}
]);
function App() {
 // let condition = 2;
 // return condition === 1 ? <AjaxToReact /> : <StudentList />
return(
  <RouterProvider router={router} />
)
}

export default App
