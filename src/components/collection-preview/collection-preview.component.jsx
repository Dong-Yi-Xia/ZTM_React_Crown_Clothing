import React from 'react'
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'


const CollectionPreview = ( {title, items} ) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/> 
                ))
            }
        </div>
    
    </div>
)


export default CollectionPreview

// items.filter().map() chaining method to show the first 4 items. 
// Items gets rerender when the component gets rerender 