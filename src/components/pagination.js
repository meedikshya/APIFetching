
import React from 'react'

export const Pagination = ({todosPerPage, totalTodos, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++ ){
            pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination' style={{"margin-left":"30rem"}}>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a href='!#' onClick={(e) => { e.preventDefault(); paginate(number) }} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>

  )
}

