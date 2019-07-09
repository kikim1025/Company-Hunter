import React from 'react';
import Button from './Button';

class Modal extends React.Component {

    // Local state keeps track of values of each input elements 
    state = {
        name: '',
        status: 'Researching',
        performance: 0,
        desc: '',
        email1: '',
        email2: '',
        email3: ''
    };

    getInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    resetState = () => {
        this.setState({ name: '', status: 'Researching', performance: 0, desc: '', email1: '', email2: '', email3: '' });
    };

    // Reset local state and activate toggleModal action on Redux
    closeModal = () => {
        this.resetState();
        this.props.toggleModal(false, true, '', '', 0, '', [])
    };

    // Upon clicking update button, set local state with current company data and activate toggleModal action on redux
    getUpdateScreen = () => {
        this.setState({ name: this.props.name, status: this.props.status, performance: this.props.performance, 
            desc: this.props.desc, email1: this.props.contacts[0] || '', email2: this.props.contacts[1] || '', email3: this.props.contacts[2] || '' });
        this.props.toggleModal(true, true, this.props.name, this.props.status, this.props.performance, this.props.desc, this.props.contacts);
    };

    sendData = () => {
        this.props.sendData(this.state.name, this.state.status, this.state.performance, this.state.desc, this.state.email1, this.state.email2, this.state.email3, this.props.data);
        this.resetState();
    };

    render() {
        return (
            <div>
                {
                    !this.props.modal
                    ?   ''
                    :   <article className='modal-box'>
                            <section className='modal-out' onClick={this.closeModal}>
                                <div className='modal-out modal-out__top'></div>
                                <div className='modal-out modal-out__right'></div>
                                <div className='modal-out modal-out__bottom'></div>
                                <div className='modal-out modal-out__left'></div>
                            </section>
                            {
                                this.props.input
                                ?   <section className='modal'>
                                        <div className='item-row'>
                                            <div className='input-group'>
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>Name</span>
                                                </div>
                                                <input type='text' name='name' maxLength='30' placeholder='Company Name' defaultValue={this.props.name} onChange={this.getInput}/>
                                            </div>
                                        </div>
                                        <div className='item-row'>
                                            <div className='input-group'>
                                                <div className='input-group-prepend'>
                                                    <label className='input-group-text'>Status</label>
                                                </div>
                                                <select className='custom-select' name='status' defaultValue={this.props.status} onChange={this.getInput}>
                                                    <option value='Researching'>Researching</option>
                                                    <option value='Pending'>Pending</option>
                                                    <option value='Approved'>Approved</option>
                                                    <option value='Declined'>Declined</option>
                                                </select>
                                            </div>    
                                        </div>
                                        <div className='item-row'>
                                            <div className='input-group'>
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>Performance</span>
                                                </div>
                                                <input type='number' name='performance' min='0' max='10' placeholder='Score' defaultValue={this.props.performance} onChange={this.getInput} />
                                            </div>
                                        </div>
                                        <div className='item-row'>
                                            <span className='input-group-text'>Company Description</span>                                              
                                            <textarea className='form-control' name='desc' maxLength='200' placeholder='Company Description' defaultValue={this.props.desc} onChange={this.getInput} />
                                        </div>
                                        <div className='item-row'>
                                            <span className='input-group-text'>Contacts Emails</span>    
                                            <input type='text' name='email1' maxLength='30' placeholder='Email 1' defaultValue={this.props.contacts[0]} onChange={this.getInput} />
                                            <input type='text' name='email2' maxLength='30' placeholder='Email 2' defaultValue={this.props.contacts[1]} onChange={this.getInput} />
                                            <input type='text' name='email3' maxLength='30' placeholder='Email 3' defaultValue={this.props.contacts[2]} onChange={this.getInput} />
                                        </div>
                                        <div className='item-row alert'>Name, Status, Performance, Description are required, performance should be between 0 and 10 inclusively, and emails, if present, should be unique and in correct format.</div>
                                        <div className='item-row'>
                                            <Button name='Send Data' style='btn-success' onClick={this.sendData} />
                                        </div>
                                    </section>
                                :   <section className='modal'>
                                        <div className='item-row modal__name'>{this.props.name}</div>
                                        <div className='item-row modal__status'><div className={'status status--' + this.props.status}>{this.props.status}</div></div>
                                        <div className='item-row modal__performance'>{this.props.performance}/10</div>
                                        <p className='item-row modal__desc'>{this.props.desc}</p>
                                        <div className='item-row modal__contacts'>
                                            <div className='email-list'>
                                                {
                                                    this.props.contacts.map((c, i) => (
                                                        <div key={i}>{c}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='item-row'>
                                            <Button name='Delete' style='btn-danger btn--left' onClick={() => this.props.deleteCompany(this.props.name)}/>
                                            <Button name='Edit' style='btn-primary btn--right' onClick={this.getUpdateScreen}/>
                                        </div>
                                    </section>
                            }
                        </article>
                }
            </div>
        );
    };
};

export default Modal;