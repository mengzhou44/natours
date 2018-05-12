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


            <div class="bg-video">
                <video class="bg-video__content" autoPlay muted loop>
                    <source src="img/video.mp4" type="video/mp4" />
                    <source src="img/video.webm" type="video/webm" />
                    Your browser does not support Videos!
                </video>
            </div>

            <Story
                imageSource='img/nat-8.jpg'
                imageCaption='Mary Smith'
                title='I had the best week ever with my family'
                content='   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui.Aperiam, ipsum sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.'
                />

                <Story
                imageSource='img/nat-9.jpg'
                imageCaption='Jack Wilson'
                title='WOW! My life is completely different now'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui.Aperiam, ipsum sapiente aspernatur libero
                      repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.'
                />

        </section>

    );
}