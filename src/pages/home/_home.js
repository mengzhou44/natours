import React from 'react';
import Navigation from '../_layout/navigation';
import Header from '../_layout/header';
import Footer from '../_layout/footer';
import About from './about';
import Features from './features';
import Tours from './tours';
import Stories from './stories';
import Book from './book';



export default (props) => {
    return (
        <div>
            <Navigation />
            <Header />
            <main>
                <About />
                <Features />
                <Tours />
                <Stories />
                <Book />
            </main>
            <Footer />
        </div>
    );
}