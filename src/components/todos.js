import { Navbarr } from "./navbar";
import { Footer } from "./footer";

export const Todos = ({todos, loading}) => {
if(loading){
    return(
        <h1>Loading</h1>
    )
}
    return(
        <div>
            <Navbarr/>
<div className="d-flex align-items-center flex-column">
            {todos.map(todo => (
                <div key={todo.id}>
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
            <label for="checkboxNoLabe1" key={todo.id} > 
                {todo.title}
            <br/>
            <br/>
            </label>
            </div>
            ))}
</div>
            <Footer />
        </div>
    )
    
}