import React from 'react';
import AlertContainer from '../container/AlertContainer';
import ControlContainer from '../container/ControlContainer';
import Company from './Company';

class Main extends React.Component {

    // direct redux to dispatch action for retrieving server data
    componentDidMount = () => {
        console.log(this.props);
        this.props.getData(); 
    };

    render() {
        return ( 
            <main>
                {   
                    !this.props.data
                    ?   <div>retrieving data...</div>
                    :   <div className='grid grid--main'>
                            <ControlContainer />
                            <div>
                                <AlertContainer />
                                <section className='company-box grid grid--company'>
                                    {
                                        this.props.data.map((c, i) => (
                                            <Company company={c} key={i} toggleModal={this.props.toggleModal} />
                                        ))
                                    }
                                </section>
                            </div>
                        </div>
                }
            </main>
        );
    };
};

export default Main;