import React from 'react';

export default (props) => {
    return (
        <footer className='footer'>
            <div className='footer__logo-box'>
                <img srcset='img/logo-green-1x.png 1x, img/logo-green-2x.png 2x'
                    alt='Full logo' src='img/logo-green-2x.png' />
            </div>
            <div className='row'>
                <div className='col s12 m6'>
                    <div className='footer__navigation'>
                        <ul className='footer__List'>
                            <li className='footer__item'
                            >
                                <a href='#' class='footer__link'>Company</a>
                            </li>
                            <li className='footer__item'
                            >
                                <a href='#' class='footer__link'>Contact us</a>
                            </li>
                            <li className='footer__item'
                            >
                                <a href='#' class='footer__link'>Careers</a>
                            </li>
                            <li className='footer__item'
                            >
                                <a href='#' class='footer__link'>Privacy Policy</a>
                            </li>
                            <li className='footer__item'
                            >
                                <a href='#' class='footer__link'>Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col s12 m6'>

                    <p className='footer__copyright'>
                        Built by <a href='#' class='footer__link'>Jonas Schmedtmann</a> for his online course <a href='#' class='footer__link'>Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
                       </p>
                </div>
            </div>
        </footer>
    );
}