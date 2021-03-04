import React from 'react'

import './menu-item.styles.scss'

// Destructing the props
const MenuItem = ( {title, imageUrl, size} ) => (
    // inline style to dynamically change the image, Use backgroundColor instead of background-color:
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`} >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem