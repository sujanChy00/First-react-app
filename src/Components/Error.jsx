import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
    return (
        <div className='error'>
            <NavLink to="/" className="home-btn"> <i className="fa fa-arrow-left"></i> Go back to Home</NavLink>
            <h1>Error 404 Page Not Found</h1>
        </div>
    )
}
