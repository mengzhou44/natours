import React from 'react';

export default (props) => {

    return (
        <div className='section-book'>
            <div className='row'>
                <div className='book'>
                    <div className='book__form'>
                        <form action='#' class='form'>
                            <div className='margin-bottom-medium'>
                                <h3 className='heading-tertiary'>
                                    Start booking now
                                    </h3>
                            </div>


                            <div className='form__group'>
                                <input
                                    type='text'
                                    className='form__input'
                                    placeholder='Full name'
                                    id='name'
                                    required
                                />
                                <label for='name' class='form__label'>
                                    Full Name
                                    </label>

                            </div>

                            <div className='form__group'>
                                <input
                                    type='text'
                                    className='form__input'
                                    placeholder='Email'
                                    id='email'
                                    required
                                />
                                <label for='email' class='form__label'>
                                    Email
                                    </label>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );

}