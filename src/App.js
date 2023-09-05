import { Home } from "./components/home";
import { Todos } from "./components/todos";
import { Users } from "./components/users";
import { Comments } from "./components/comments";
import { Footer } from "./components/footer";
import { Pagination } from "./components/pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App(){

  const[todos,setTodos] = useState([]);
  const[loading, setLoading] = useState(false);

  const[users, setUsers] = useState([]);
  const[comments,setComments] = useState([]);

  const[currentPage, setCurrentPage] = useState(1);
  const[todosPerPage] = useState(15);


  useEffect(() => {
    const fetchtodos = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setTodos(res.data);
    setUsers(res.data);
    setLoading(false);
    };
    fetchtodos();
  } , [])

  useEffect(() => {
    const fetchtodos = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
    setLoading(false);
    };
    fetchtodos();
  } , [])

  useEffect(() => {
    const fetchtodos = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setComments(res.data);
    setLoading(false);
    };
    fetchtodos();
  } , [])



  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodo = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  //on clicking page numbers
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= { <Home /> }/>
          <Route path="/Users" element= { <Users users={users} /> }/>
          <Route path="/Todos"
           element= {<>
            <Todos todos={currentTodo} loading={loading} /> 
          <Pagination todosPerPage={todosPerPage} totalTodos={todos.length} paginate={paginate} />
           
           </>}/>
          <Route path="/Comments" element= { <Comments comments={comments} /> }/>
        </Routes>
          <Footer />
      </Router>
    </div>
  );
}
export default App;
