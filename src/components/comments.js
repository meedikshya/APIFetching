import { Navbarr } from "./navbar";
import { Footer } from "./footer";

export const Comments = ({comments}) => {
   return(
    <div>
        <Navbarr />

        {comments.map(comment => (
            <div className="comments" key={comment.id}>
            {comment.body}
            <br />
            <br />
             </div>
        ))}

        <Footer />
    </div>
   ) 
}