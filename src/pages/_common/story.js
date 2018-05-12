
import React from 'react';

export default (props) => {

    return (
        <div className='story'>
            <figure className='story__shape'>
                <img src={props.imageSource} alt='story image' className='story__img' />
                <figcaption className='story__caption'>{props.imageCaption}</figcaption>
            </figure>
            <div className='story__text'>
                <h3 className='heading-tertiary margin-bottom-small'>{props.title}</h3>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

