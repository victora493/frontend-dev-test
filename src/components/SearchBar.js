import React, { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
    const [term, setTerm] = useState('')

    return (
        <div className={styles.searchWrapper}>
            <input 
                type="text" 
                placeholder="Search by Rocket Name..."
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
            <svg class="Icon Icon--search-desktop" role="presentation" viewBox="0 0 21 21">
                <g transform="translate(1 1)" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square">
                    <path d="M18 18l-5.7096-5.7096"></path>
                    <circle cx="7.2" cy="7.2" r="7.2"></circle>
                </g>
            </svg>
        </div>
    )
}
