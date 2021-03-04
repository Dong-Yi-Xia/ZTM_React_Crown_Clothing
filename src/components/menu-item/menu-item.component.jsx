import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

// Destructing the props
const MenuItem = ( {title, imageUrl, size, history, linkUrl, match} ) => {
    // console.log(match)
    return(
    // inline style to dynamically change the image, Use backgroundColor instead of background-color:
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} /> 
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}

// By wrapping the component in withRouter, super charge it the component, 
// give it access to the props of location, history, match 
export default withRouter(MenuItem)