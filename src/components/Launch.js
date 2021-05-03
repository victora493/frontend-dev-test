import React, { useEffect, useState } from 'react'
import styles from '../styles/Launch.module.css'
import { Checkmark, Close, WikiIcon , Close2} from '../svgs'
import { useHistory, useLocation } from 'react-router-dom'


export default function Launch({launches}) {
    const [selectedLaunch, setSelectedLaunch] = useState(null)

    const { hash } = useLocation()
    const history = useHistory();

    // listen to hash change in tab to update launch
    useEffect(() => {
        const curLaunch = launches.find((launch) => launch.id === hash.slice(1))
        setSelectedLaunch(curLaunch)
        console.log(curLaunch);
    }, [hash])
    
    return (
        <>
            <div class={styles.launchContainer}>
                <h1>Launch</h1>
                    {selectedLaunch
                        ? (
                            <div class={styles.mainContent}>
                                <Close2
                                    onClick={() => history.push('#')}
                                    className={styles.closeIcon}
                                />
                                <div class={styles.mainImgContainer}>
                                    <img src={selectedLaunch.links.patch.small} alt="launch-img-big" />
                                </div>
                                <h2>
                                    {selectedLaunch.name} 
                                    <a href={selectedLaunch.links.wikipedia} target="_blanck">
                                        <WikiIcon/>
                                    </a>
                                </h2>
                                <p>
                                    {
                                    new Date(selectedLaunch.date_local).toLocaleString('en-US', {
                                        dateStyle: 'medium',
                                        timeStyle: 'short'
                                    })
                                    }
                                </p>
                                <div class={styles.successContainer}>
                                    <p> <span>Mission success:</span></p>
                                    {selectedLaunch.success ? 
                                        (<Checkmark
                                            className={styles.success}
                                            />) :
                                            (<Close
                                                className={styles.fail}
                                        />)
                                    }
                                </div>
                                <p className={styles.details}> 
                                    <span>Details: </span> 
                                    {selectedLaunch.details ? selectedLaunch.details : 'No details'}
                                    {selectedLaunch.details && selectedLaunch.details.slice(-1) === '.' ? '' : '.'}
                                </p>
                            </div>
                        )
                        :
                        (   
                            <div class={styles.mainContent}>
                                <p>No Launch Selected</p>
                            </div>
                        )
                    }
            </div>
        </>
    )
}
