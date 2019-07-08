import React from 'react';
import Button from './Button';

// might add search and sorting buttons later
class Control extends React.Component {

    render() {
        return (
            <aside className='control-panel'>
                <Button name='Create Company Data' style='btn-primary'
                    onClick={() => 
                        this.props.toggleModal(
                            true, true, '', '', 0, '', []
                        )
                    }
                />
            </aside>
        );
    };
};

export default Control;