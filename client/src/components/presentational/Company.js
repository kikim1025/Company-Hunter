import React from 'react';
// import Modal from './Modal';

class Company extends React.Component {
    state = {
        modal: false
    };

    render() {
        return ( 
            <article>
                { this.props.company.name }
            </article>
        );
    };
};

export default Company;