import React from 'react'
import './Home.css'
import Banner from './Banner'

//ES7 snippets to do 'rfce'

export default function Home() {
    return (
        <div className = 'home'>
            <h1>Home component</h1>
            <Banner />
        </div>
    )
}
