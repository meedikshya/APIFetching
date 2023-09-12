import { Navbarr } from "./navbar";
import { Footer } from "./footer";
import React from 'react';
import image from "../images/userrr.png";



export const Users = ({users, loading, comments}) => {
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
              <div className="accordion" id={`accordion-${user.id}`}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`heading-${user.id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${user.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${user.id}`}
                    >
                      See More
                    </button>
                  </h2>
                  <div
                    id={`collapse-${user.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${user.id}`}
                    data-bs-parent={`#accordion-${user.id}`}
                  >
                    <div className="accordion-body">
                    <p id={`{comment.id}`}>
                    Total Comments : {comments.length}
                    </p>
                    
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
