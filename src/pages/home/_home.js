import React from 'react';
import Header from '../_layout/header';
import About from './about';
import Features from './features';
import Tours from './tours';
import Stories from './stories';

export default (props) => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Features />
                <Tours />
                <Stories />
            </main>
        </div>
    );
}