import React from 'react';
import Modal from './Modal';

class Company extends React.Component {
    state = {
        modal: false
    };

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };

    render() {
        return (
            <div>
                {   this.state.modal 
                    ?   <Modal name={this.props.company.name}
                            toggleModal={this.toggleModal} />
                    :   ''
                }
                <article className='company' onClick={() => this.toggleModal()}>
                    { this.props.company.name }
                </article>
            </div>
        );
    };
};

export default Company;