import React from 'react'

export default function Card({title, overview, year, genres, poster}) {
    return (
        <article className="card">
            <img src={poster} alt="TV poster" />
            <div>
                <h2>{title}</h2>
                <div className="meta">
                    <p>{year}</p>
                    <p>{genres}</p>
                </div>
                <p>{overview}</p>
            </div>
        </article>
    )
}
