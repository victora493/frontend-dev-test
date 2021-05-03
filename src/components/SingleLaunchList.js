import React, { useEffect, useRef } from 'react'
import styles from './LaunchesList.module.css'
import { useHistory, useLocation } from 'react-router-dom'
import shave from 'shave'

export default function SingleLaunchList({launch}) {
    const pRef = useRef()
    const { hash } = useLocation()
    const history = useHistory()

    useEffect(() => {
        shave(pRef.current,  24, { spaces: false })
    }, [])

    return (
        <li
            className={hash.slice(1) === launch.id && styles.active}
            id={launch.id} 
            onClick={() => history.push(`#${launch.id}`)}
        >
            <div class={styles.imgListcontainer}>
                <img src={launch.links.patch.small} alt="launch-img" />
            </div>
            <div class={styles.description}>
                <p ref={pRef} >
                    {launch.name}
                </p>
                <p>
                    {
                        new Date(launch.date_local).toLocaleString('en-US', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                        })
                    }
                </p>
            </div>
        </li>
    )
}
