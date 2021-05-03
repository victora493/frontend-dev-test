import React, { useEffect } from 'react'
import styles from './LaunchesList.module.css'
import SingleLauchList from './SingleLaunchList'
import Pagination from './Pagination'

export default function LaunchesList({isLoading, launches, errMsg, pages, setPages, curPage, setCurPage}) {
    const resultsPerPage = 5;
    // calculate all pages
    const calcPages = () => {
        let pages = (launches.length / resultsPerPage);
        // total pages with 5 el
        pages = Math.ceil(pages)
        setPages(pages)
        console.log('pages:', pages);
    }

    useEffect(() => {
        calcPages();
    }, [launches])


    return (
        <div class={styles.dataList}>
            <h1>Records</h1>
            <ul class={styles.listContainer}>
                {isLoading ? 
                    ( <li> Loading...</li> ) 
                :
                    // in case there are 0 pages(no data found when filtering) do not loop
                    pages === 0 ? 
                        <p className={styles.noContentText} >{errMsg}</p> 
                    : 
                        launches?.slice(curPage * resultsPerPage, curPage * resultsPerPage + resultsPerPage).map(launch => (
                    <SingleLauchList
                            key={launch.id}
                            launch={launch}
                    />
                ))}
            </ul>
            <Pagination
                pages={pages}
                curPage={curPage}
                setCurPage={setCurPage}
                lauches={launches}
            />
        </div>
    )
}
