import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


const ColletionPreview = ({title, items}) => (
    <div className='collection-preview'>
        
        <div className='preview'>
            {
                items
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);

export default ColletionPreview;