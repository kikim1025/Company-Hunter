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
                                <div className='modal-out__top'></div>
                                <div className='modal-out__right'></div>
                                <div className='modal-out__bottom'></div>
                                <div className='modal-out__left'></div>
                            </section>
                            {
                                this.props.input
                                ?   <section className='modal grid grid--modal'>
                                        <div className='modal__name item-row'>
                                            <div className='input-group'>
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>Name</span>
                                                </div>
                                                <input type='text' name='name' maxLength='30' placeholder='Company Name' defaultValue={this.props.name} onChange={this.getInput}/>
                                            </div>
                                        </div>
                                        <div className='modal__status item-row'>
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
                                        <div className='modal__performance item-row'>
                                            <div className='input-group'>
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>Performance</span>
                                                </div>
                                                <input type='number' name='performance' min='0' max='10' placeholder='Score' defaultValue={this.props.performance} onChange={this.getInput} />
                                            </div>
                                        </div>
                                        <div className='modal__desc item-row'>                                            
                                            <textarea className='modal--input__desc form-control' name='desc' maxLength='200' placeholder='Company Description' defaultValue={this.props.desc} onChange={this.getInput} />
                                        </div>
                                        <div className='modal__contacts item-row'>
                                            <span className='input-group-text'>Contacts Emails</span>    
                                            <input type='text' name='email1' maxLength='30' placeholder='Email 1' defaultValue={this.props.contacts[0]} onChange={this.getInput} />
                                            <input type='text' name='email2' maxLength='30' placeholder='Email 2' defaultValue={this.props.contacts[1]} onChange={this.getInput} />
                                            <input type='text' name='email3' maxLength='30' placeholder='Email 3' defaultValue={this.props.contacts[2]} onChange={this.getInput} />
                                        </div>
                                        <div className='modal__buttons item-row'>
                                            <Button name='Send Data' style='btn-success' onClick={this.sendData} />
                                        </div>
                                    </section>
                                :   <section className='modal grid grid--modal'>
                                        <h2 className='modal__name item-row'>{this.props.name}</h2>
                                        <div className='modal__status item-row'>{this.props.status}</div>
                                        <div className='modal__performance item-row'>{this.props.performance}/10</div>
                                        <p className='modal__desc item-row'>{this.props.desc}</p>
                                        <div className='modal__contacts item-row'>
                                            <div>Contacts</div>
                                            {
                                                this.props.contacts.map((c, i) => (
                                                    <div className='email' key={i}>{c}</div>
                                                ))
                                            }
                                        </div>
                                        <div className='modal__alert item-row'>Name, Status, Performance, Description are required, performance should be between 0 and 10 inclusively, and emails, if present, should be unique and in correct format.</div>
                                        <div className='modal__buttons item-row'>
                                            <div className='left'><Button name='Delete' style='btn-danger' onClick={() => this.props.deleteCompany(this.props.name)}/></div>
                                            <div className='right'><Button name='Edit' style='btn-primary'onClick={this.getUpdateScreen}/></div>
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