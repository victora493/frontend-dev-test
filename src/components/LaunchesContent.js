import React, { useEffect, useState } from 'react';
import styles from '../styles/LaunchesContent.module.css';
import axios from 'axios';
import Launch from '../components/Launch';
import SearchBar from '../components/SearchBar';
import LaunchesList from '../components/LaunchesList';


export default function LaunchesContent() {
    const [isLoading, setIsLoading] = useState(false);
    const [launches, setLaunches] = useState([]);
    const [inputValue, setInputValue] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [pages, setPages] = useState([]);
    const [curPage, setCurPage] = useState(0)
    

    // get data after first loads
    useEffect(() => {
        fetchLaunches();
    }, [])

    
    const fetchLaunches = async () => {
        try {
            setIsLoading(true)

            const { data } = await axios('https://api.spacexdata.com/v4/launches/past');
            setLaunches(data)
            console.log(data)

        } catch(err) {
            console.log('my error',err);
            setErrMsg(`Error: ${err.message}`)
        } finally {
            setIsLoading(false)
        }
    }
    

    // listen to input change to filter the data
    useEffect(() => {
        const filtered = launches.filter(launch => {
            return launch.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setLaunches(filtered)
        setCurPage(0)
        if(pages === 0) setErrMsg('No data found')
    }, [inputValue])
    
    
    return (
        <>
            <SearchBar
                setInputValue={setInputValue}
            />
            <div className={styles.ContentWrapper}>
                <LaunchesList
                    isLoading={isLoading}
                    launches={launches}
                    errMsg={errMsg}
                    pages={pages}
                    setPages={setPages}
                    curPage={curPage}
                    setCurPage={setCurPage}
                />
                <Launch
                    launches={launches}
                />
            </div>
        </>
    )
}

