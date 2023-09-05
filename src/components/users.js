import { Navbarr } from "./navbar";
import { Footer } from "./footer";
import React from 'react';
import image from "../images/user1.png";


export const Users = ({users}) => {
  return (
    <div className="HomePage">
      <Navbarr />
      <div className="container" style={{ "padding": "20px" }}>
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <div className="card" style={{ "height": "23rem", "margin": "20px", "border": "1px solid #D3D3D3" }}>
                <img src={image} className="card-img-top" alt="User" height="180px" style={{ "width": "200px", "margin": "20px auto" }} />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                </div>
                <div className="card-footer">
                  <small className="text-muted">See More</small>
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