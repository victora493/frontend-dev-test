import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({curPage, setCurPage, pages}) {
    return (
        <ul class={styles.pagination}>  
            <li 
                className={curPage === 0 && 'disabled'} 
                onClick={() => setCurPage(curPage > 0 ? curPage - 1 : curPage)}
            >
                Previous
            </li>
            <li>{curPage + 1} / {pages}</li>
            <li 
                className={curPage + 1 === pages && 'disabled'} 
                onClick={() => setCurPage(curPage + 1 < pages ? curPage + 1 : curPage)}
            >
                Next
            </li>
        </ul>
    )
}
