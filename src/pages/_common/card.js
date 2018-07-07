import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';


class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card__side card__side--front'>
                    <div className={`card__picture card__picture--${this.props.index}`}>
                        &nbsp;
              </div>
                    <h4 className='card__heading'>
                        <span className={`card__heading-span card__heading-span--${this.props.index}`}>
                            {this.props.title}
                        </span>
                    </h4>
                    <div className='card__details'>
                        {this.props.children}
                    </div>
                </div>
                <div className={`card__side card__side--back card__side--back-${this.props.index}`}>
                    <div className='card__cta'>
                        <div className='card__price-box'>
                            <p className='card__price-only'>Only</p>
                            <p className='card__price-value'>{this.props.price}</p>
                        </div>
                        <a href="#popup" className='btn btn--white' onClick={() =>
                            this.props.showPopup()
                        }>Book now!</a>
                    </div>
                </div>

            </div>
        );
    }
}



export default connect(null, actions)(Card);
