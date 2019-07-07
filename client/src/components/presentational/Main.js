import React from 'react';
import ControlPanel from './ControlPanel';
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
                {   !this.props.data
                    ?   <div>retrieving data...</div>
                    :   <div>
                            <ControlPanel />
                            <section className='company-box'>
                                {
                                    this.props.data.map((c, i) => (
                                        <Company company={c} key={i} />
                                    ))
                                }
                            </section>
                        </div>
                }
            </main>
        );
    };
};

export default Main;