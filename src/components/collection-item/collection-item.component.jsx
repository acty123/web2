import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, imageUrl}) => (
    <div className='collection-item'>
        
        <img className='image-ecommerce' src={imageUrl} alt={imageUrl}></img>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
        </div>    
    </div>
);

export default CollectionItem;