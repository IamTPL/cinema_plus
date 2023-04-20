import React from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

const Layout = ({ Component }) => {
    return (
        <>
            <Header></Header>
            <Component />
            <Footer></Footer>
        </>
    );
};

export default Layout;
