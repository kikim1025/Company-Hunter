import React from 'react';
import ModalContainer from '../container/ModalContainer';
import Header from './Header';
import MainContainer from '../container/MainContainer';

const Page = () => (
    <div id='page'>
        <ModalContainer />
        <Header />
        <MainContainer />
    </div>
);

export default Page;