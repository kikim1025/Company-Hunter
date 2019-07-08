import React from 'react';
import Button from './Button';

const Company = (props) => (
    <article className='company'>
        <div className='company__name item-row'>{props.company.name}</div>
        <div className='company__performance item-row'>Score: {props.company.performance}/10</div>
        <div className='company__status item-row'>Status: {props.company.status}</div>
        <div className='company__buttons item-row'>
            <Button name='Details' style='btn-sm btn-info'
                onClick={() => 
                    props.toggleModal(
                        true, false, props.company.name, 
                        props.company.status, props.company.performance, 
                        props.company.desc, props.company.contacts
                    )
                }
            />
        </div>
    </article>
);


export default Company;