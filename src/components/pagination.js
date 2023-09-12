
import React from 'react'

export const Pagination = ({todosPerPage, totalTodos, paginate, paginateComment, commentsPerPage, totalComments, paginatePosts, postsPerPage, totalPosts}) => {

    const todoPageNumbers = [];
    const commentPageNumbers = [];
    const postPageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++ ){
            todoPageNumbers.push(i);
    }

    for(let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++ ){
        commentPageNumbers.push(i);
    }

    for(let i =1 ; i <= Math.ceil(totalPosts / postsPerPage) ; i++) {
        postPageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination' style={{"margin-left":"30rem"}}>
            {todoPageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a href='!#' onClick={(e) => { e.preventDefault(); paginate(number) }} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        <ul className='pagination' style={{"margin-left":"5   rem"}}>
            {commentPageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a href='!#' onClick={(e) => { e.preventDefault(); paginateComment(number) }} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        <ul className='pagination' style={{"margin-left":"37rem"}}>
            {postPageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a href='!#' onClick={(e) => { e.preventDefault(); paginatePosts(number) }} className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

