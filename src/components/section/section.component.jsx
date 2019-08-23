import React from 'react';
import './section.styles.scss';

const Section = ({children,title,hr,background,image,color,size}) => (
    
    <div className={`${size==='sml' ? 'sml':''} section`} >
        {
            background ? (
                <div
                    className='image-section'
                    style={{
                        backgroundImage: `url(${background})`
                        
                    }}
                ></div>
            ):(
                null
            )
        }
        <div className='section-content' style={{color: `${color}`}}>
            {
                size==='big' ? (
                    <h2>{title}</h2>
                    
                ):(
                    null
                )
            }
            {
                size==='mid' ? (
                    <h3>{title}</h3>
                    
                ):(
                    null
                )
            }
            {
                size==='sml' ? (
                    <h6>{title}</h6>
                    
                ):(
                    null
                )
            }
            {
                size==='sml2' ? (
                    <h6>{title}</h6>
                    
                ):(
                    null
                )
            }
            {hr ? (<hr className='separator'/>) :(null)}
            <p>{children}</p>
            <img className='image' src={image} alt={image}></img>
        </div>
        
        
    
    </div>
);

export default Section;