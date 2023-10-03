import { Navbarr } from "./navbar";
import { Footer } from "./footer";
import React from 'react';
import image from "../images/userrr.png";
import comment from "../images/comments.png";


export const Users = ({users, loading, comments,todos,posts}) => {
if(loading){
  return(
    <h1>loading...</h1>
  )
}

return (
  <div className="HomePage">
    <Navbarr />
    <div className="container" style={{ "padding": "40px" }}>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-3" key={user.id}>
            <div className="card" style={{ "margin": "20px", "border": "1px solid #D3D3D3", "width":"260px"}}>
              <img src={image} className="card-img-top" alt="User" height="110px" style={{ "width": "50%", "margin": "20px auto" }} />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p>Username: {user.username}</p>
              </div>

              {/* main accordian */}
              
              <div className="accordion" id={`main-accordion-${user.id}`}>
                <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#user-details-${user.id}`}
                      aria-expanded="false"
                    >
                      See More
                    </button>

                  <div
                    id={`user-details-${user.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`user-heading-${user.id}`}
                    data-bs-parent={`#main-accordion-${user.id}`}
                  >

                    <div className="accordion-body">

                    {/* accordian inside accordian */}
 
                    <div className="accordion" id={`nested-accordion-${user.id}`}>
                      <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#user-todos-${user.id}`}
                      aria-expanded="false"
                    >
                      Todos
                    </button>

                  <div
                    id={`user-todos-${user.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`user-todos-heading-${user.id}`}
                    data-bs-parent={`#nested-accordion-${user.id}`}
                  >
                    <div className="accordion-body">
                    <p key={`todo.id`}>
                    {console.log(todos.length)}
                    Total Todos : {todos.filter((todo) => todo.userId === user.id).length}
                    </p>
                    <ul>
                    {todos.filter((todo) => todo.userId === user.id).map((usertodo) => (
                      <li key={usertodo.id}>
                        {usertodo.title}
                      </li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>


              
            {/* newww post nested accordion */}
            <div className="accordion" id={`new-post-accordion-${user.id}`}>
                      <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#user-posts-${user.id}`}
                      aria-expanded="false"
                    >
                      Posts
                    </button>

                  <div
                    id={`user-posts-${user.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`user-posts-heading-${user.id}`}
                    data-bs-parent={`#new-post-accordion-${user.id}`}
                  >
                    <div className="accordion-body">
                    <p key='post.id'>
                      {console.log(posts.length)}
                      Total Posts : {posts.filter((post)=> post.userId === user.id).length}
                    </p>
                    <ul>
                    {posts.filter((post)=> post.userId === user.id).map((userpost) => (
                      <li key = {userpost.id}>
                      {userpost.body}
                      {console.log(userpost.title)}
                      <br/>
                      <br/>


                  {/* Nested comments lists buttons */}
                  

                       <div className="accordion" id={`new-nested-accordion-${user.id}`}>
                      <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#user-comments-${user.id}`}
                      aria-expanded="false"
                    >
                       <img src={comment} height="20px" width="20px" alt="comment"></img>
                      Comments
                    </button>

                  <div
                    id={`user-comments-${user.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`user-comments-heading-${user.id}`}
                    data-bs-parent={`#new-nested-accordion-${user.id}`}
                  >
                    <div className="accordion-body">
                    <p key='comment.id'>
                      {console.log(comments.length)}
                      Total Comments : {comments.filter((comment)=> comment.postId === user.id).length}
                    </p>
                    <ul>
                    
                    {comments.filter((comment)=> comment.postId === user.id).map((usercomment) => (
                      <li key = {usercomment.id}>
                      
                      {usercomment.body}
                      {console.log(usercomment.body)}
                      </li>
                        ))}
                    </ul>
                    <br />
                    <br />

                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
                      </li>
                        ))}
                    </ul>
                  </div>
                </div>
                      
              </div>
              
            </div>

          </div>
        </div>
      </div> 
    </div>
  </div>
</div>
))}
</div>
</div>
<Footer />
</div>
);
};


