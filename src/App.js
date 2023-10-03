import { Home } from "./components/home";
import { Todos } from "./components/todos";
import { Users } from "./components/users";
import { Comments } from "./components/comments";
import { Footer } from "./components/footer";
import { Pagination } from "./components/pagination";
import { Posts } from "./components/posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App(){

  const[todos,setTodos] = useState([]);
  const[loading, setLoading] = useState(false);

  const[users, setUsers] = useState([]);
  const[comments,setComments] = useState([]);
  const[posts, setPosts] = useState([]);

  const[currentPage, setCurrentPage] = useState(1);
  const[todosPerPage] = useState(15);

  const[currentcommentPage, setCurrentCommentPage] = useState(1);
  const[commentsPerPage] =useState(15);

  const[currentPostPage, setCurrentPostPage] = useState(1)
  const[postsPerPage] = useState(10);


    //todosss
  useEffect(() => {
    const fetchtodos = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setTodos(res.data);
    setLoading(false);
    };
    fetchtodos();
  } , [])

  //users
  useEffect(() => {
    const fetchusers = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
    const userArray = (res.data);
    console.log(userArray);
    setLoading(false);
    };
    fetchusers();
  } , [])

  
//comments
  useEffect(() => {
    const fetchcomments = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    setComments(res.data);
    const commentsArray = (res.data);
    console.log(commentsArray);
    setLoading(false);
    };
    fetchcomments();
  } , [])


  //posts
  useEffect(()=> {
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      const postsArray = (res.data);
      console.log(postsArray);
    };
    fetchPosts();
  }, [])



  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodo = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const indexOfLastComment = currentcommentPage * commentsPerPage;
  const indexOfFirstcomment = indexOfLastComment - commentsPerPage;
  const currentComment = comments.slice(indexOfFirstcomment, indexOfLastComment)

  const indexOfLastPost = currentPostPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);



  //on clicking page numbers of todos
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  //of comment page
  const paginateComment = (pageNumber) => {
    setCurrentCommentPage(pageNumber);
  }

  //of posts page
  const paginatePosts = (pageNumber) => {
    setCurrentPostPage(pageNumber);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= { <Home /> }/>

          <Route path="/Users" element= { <Users users={users} todos={todos} posts={posts}
           loading={loading} comments={comments} 
            /> }
            />

          <Route path="/Todos"
           element= {<>
            <Todos todos={currentTodo} loading={loading} /> 
          <Pagination todosPerPage={todosPerPage} totalTodos={todos.length} paginate={paginate} />
           </>}/>

          <Route path="/Comments"
           element= {<>
             <Comments comments={currentComment} /> 
          <Pagination commentsPerPage={commentsPerPage} totalComments={comments.length} paginateComment={paginateComment} />
             </>}/>

             <Route path="/Posts" element= {
              <>
               <Posts posts={currentPost}  />
               <Pagination postsPerPage={postsPerPage}  totalPosts= {posts.length} paginatePosts={paginatePosts} />

               </>
                } 
                />
        </Routes>
          <Footer />
      </Router>
    </div>
  );
}
export default App;
