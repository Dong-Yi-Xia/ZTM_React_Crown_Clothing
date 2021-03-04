import React from 'react'

import './menu-item.styles.scss'

// Destructing the props
const MenuItem = ( {title, imageUrl, size} ) => (
    // inline style to dynamically change the image, Use backgroundColor instead of background-color:
    <div className={`${size} menu-item`} >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} /> 
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem