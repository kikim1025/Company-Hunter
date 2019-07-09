import React from 'react';
import Button from './Button';

const Company = (props) => (
    <article className='company'>
        <div className='item-row'><div className='company__name'>{props.company.name}</div></div>
        <div className='item-row'><div className='company__performance'>Score: <i>{props.company.performance}/10</i></div></div>
        <div className='item-row'><div className='company__status'>Status: <div className={'status status--' + props.company.status}><strong>{props.company.status}</strong></div></div></div>
        <div className='item-row'>
            <div className='company__buttons'>
                <Button name='Details' style='btn-sm btn-info btn--center'
                    onClick={() => 
                        props.toggleModal(
                            true, false, props.company.name, 
                            props.company.status, props.company.performance, 
                            props.company.desc, props.company.contacts
                        )
                    }
                />
            </div>
        </div>
    </article>
);

export default Company;