import { Navbarr } from "./navbar";
import { Footer } from "./footer";

export const Comments = ({comments}) => {
      return (
        <div className="commentPage">
          <Navbarr />
          <div className="container" style={{ "padding": "20px" }}>
            <div className="row">
              {comments.map((comment) => (
                <div className="col-md-4" key={comment.id}>
                  <div className="card" style={{ "height": "20rem", "margin": "20px", "border": "1px solid #D3D3D3" }}>
                    <div className="card-body">
                      <h5 className="card-title">{comment.name}</h5>
                      <p> email :  {comment.email} </p>
                    </div>
                    <div className="card-footer" style={{"height":"10rem"}}>
                      <small className="">{comment.body}</small>
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