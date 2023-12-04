
import './App.css'
import StudentList from './pages/StudentList';
import AjaxToReact from "./pages/AjaxtoReact";


function App() {
  let condition = 2;
  return condition === 1 ? <AjaxToReact /> : <StudentList />

}

export default App
