import React from 'react'
import {Link } from 'react-router-dom' ;


export default function header() {
    return (
        <header style= {headerstyle}>
            <h1>TO DO LIST </h1>
            <Link style = {LinkStyle} to = "/" >Home </Link> |
            <Link style = {LinkStyle} to = "/about"> About</Link>
         </header>
    )
}


const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerstyle = {

    background: '#333',
    color: '#fff',
    textAlign: 'centre ',
    padding: '10px'

}