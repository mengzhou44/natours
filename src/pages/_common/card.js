import React from 'react';

export default (props) => {

    return (
        <div className='card'>
            <div className='card__side card__side--front'>
                <div className={`card__picture card__picture--${props.index}`}>
                    &nbsp;
              </div>
                <h4 className='card__heading'>
                    <span className={`card__heading-span card__heading-span--${props.index}`}>
                        {props.title}
                    </span>
                </h4>
                <div className='card__details'>
                    {props.children}
                </div>
            </div>
            <div className={`card__side card__side--back card__side--back-${props.index}`}>
                <div className='card__cta'>
                    <div className='card__price-box'>
                        <p className='card__price-only'>Only</p>
                        <p className='card__price-value'>{props.price}</p>
                    </div>
                    <a href='#' className='btn btn--white'>Book now!</a>
                </div>
            </div>
        </div>
    );
}