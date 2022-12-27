import React from 'react';
import '../styles/individualProject.css';

function Project({img, alt, description}){
    return(

        <div className='project-box'>
            <img src={img} alt={alt}/>

            <div className='project-box_over'>
                <h1 className='b'>{alt}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;