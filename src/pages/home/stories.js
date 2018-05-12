import React from 'react';
import Story from '../_common/story';

export default (props) => {
    return (
        <section className='section-stories'>
            <div className='center-text margin-bottom-big'>
                <h2 className='heading-secondary'>
                    We make people genuinely happy!
               </h2>
            </div>

            <div className='row'>
                <Story
                    imageSource='img/nat-9.jpg'
                    imageCaption='Jack Wilson'
                    title='WOW! My life is completely different now'
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui.Aperiam, ipsum sapiente aspernatur libero
                      repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
                />
             </div>

        </section>

    );
}