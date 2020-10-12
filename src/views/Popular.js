import React, { useState, useEffect } from 'react'

import { getPopular } from '../axios'

import AnimeContainer from '../components/AnimeContainer'

import '../styles/home.css'

const Popular = () => {
    const [popular, setPopular] = useState('')

    useEffect(() => {
        getPopular(1, setPopular)
    }, [])

    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Popular series</h3>
                <AnimeContainer data = {popular.data}/>
            </div>
        </div>
    )
}

export default Popular
