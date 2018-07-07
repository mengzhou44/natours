import React from 'react';
import Card from '../_common/card';


export default (props) => {
    return (
        <section className='section-tours'>
            <div className='center-text margin-bottom-big'>
                <h2 className='heading-secondary'>
                    Most popular tours
               </h2>
            </div>

            <div className='row'>
                <div className='col s12 m4'>
                    <Card price='$297' title='The Sea Explorer' index={1} >
                        <ul>
                            <li>3 day tours</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Difficulty: easy</li>
                        </ul>
                    </Card>
                </div>
                <div className='col s12 m4'>
                    <Card price='$497' title='The Forest Hiker' index={2} >
                        <ul>
                            <li>7 day tours</li>
                            <li>Up to 40 people</li>
                            <li>6 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: medium</li>
                        </ul>
                    </Card>
                </div>
                <div className='col s12 m4'>
                    <Card price='$897' title='The Snow Adventurer' index={3} >
                        <ul>
                            <li>5 day tours</li>
                            <li>Up to 15 people</li>
                            <li>3 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: hard</li>
                        </ul>
                    </Card>
                </div>

            </div>
            <div className='center-text margin-top-huge'>
                <a href='#' className='btn btn--green'>Discover all tours</a>
            </div>

        </section>

    );
}