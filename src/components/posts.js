import React from 'react'
import { Navbarr } from './navbar';
import { Footer } from './footer';

export const Posts = ({posts}) => {



    return (
        <div className="commentPage">
          <Navbarr />
          <div className="container" style={{ "padding": "20px" }}>
            <div className="row">
              {posts.map((post) => (
                <div className="col-md-4" key={post.id}>
                  <div className="card" style={{ "height": "20rem", "margin": "20px", "border": "1px solid #D3D3D3" }}>
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                    </div>
                    <div className="card-footer" style={{"height":"10rem"}}>
                      <small className="">{post.body}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      );
            }